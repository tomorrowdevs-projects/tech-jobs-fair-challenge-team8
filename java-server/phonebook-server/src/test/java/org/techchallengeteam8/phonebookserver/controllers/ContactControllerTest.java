package org.techchallengeteam8.phonebookserver.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import org.techchallengeteam8.phonebookserver.dtos.ContactDetailsDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.model.Contact;
import org.techchallengeteam8.phonebookserver.repositories.ContactRepository;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser(username = "admin@admin.com", roles = {"ADMIN"})
@Sql(scripts = {"classpath:db/insertContactsShort.sql"})
class ContactControllerTest {

    @Autowired
    ContactController contactController;

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    ContactRepository contactRepository;

    @Test
    void searchContacts() throws Exception {

        mockMvc.perform(get("/contacts?search=John"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].firstName", is("John")));
    }

    @Test
    void getContactById() throws Exception {
        mockMvc.perform(get("/contacts/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName", is("John")));
    }

    @Test
    void saveContact() throws Exception {

        ExtendedContactDto contactDto = ExtendedContactDto.builder()
                .firstName("Judith")
                .lastName("Ross")
                .address("123 Main St")
                .jobTitle("Software Engineer")
                .company("Tech Challenge Team 8")
                .city("Anytown")
                .zipCode("12345")
                .country("USA")
                .contactDetailsDtos(List.of(
                        ContactDetailsDto.builder()
                                .type("Email")
                                .info("judith@gmail.com")
                                .build(),
                        ContactDetailsDto.builder()
                                .type("Phone")
                                .info("555-1234")
                                .build()))
                .build();

        mockMvc.perform(post("/contacts")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(contactDto)))
                .andExpect(status().isOk());
    }

    @Test
    @Transactional
    void updateContact() throws Exception {
        Contact contact = contactRepository.findContactByFirstName("John");
        Long id = contact.getId();
        String formerCompany = contact.getCompany();


        ExtendedContactDto contactDto = ExtendedContactDto.builder()
                .id(id)
                .firstName("John")
                .lastName("Doe")
                .address("123 Main St")
                .jobTitle("Software Engineer")
                .company("Tech Challenge Team 8")
                .city("Anytown")
                .zipCode("12345")
                .country("USA")
                .contactDetailsDtos(List.of(
                        ContactDetailsDto.builder()
                                .type("Email")
                                .info("xyz@xyz.com")
                                .build(),
                        ContactDetailsDto.builder()
                                .type("Phone")
                                .info("555-1234")
                                .build()))
                .build();

        mockMvc.perform(put("/contacts")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(contactDto)))
                .andExpect(status().isOk());

        Contact updatedContact = contactRepository.findById(id).orElseThrow();
        String newCompany = updatedContact.getCompany();
        assertNotEquals(formerCompany, newCompany);
    }

    @Test
    @Transactional
    void deleteContact() throws Exception {
        Long id = contactRepository.findContactByFirstName("John").getId();
        long formerSize = contactRepository.count();

        mockMvc.perform(delete("/contacts/" + id))
                .andExpect(status().isOk());

        long newSize = contactRepository.count();
        assertEquals(formerSize - 1, newSize);
    }
}