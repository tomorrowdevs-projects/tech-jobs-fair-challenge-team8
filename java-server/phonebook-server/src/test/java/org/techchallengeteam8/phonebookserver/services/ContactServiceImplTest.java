package org.techchallengeteam8.phonebookserver.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;
import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ContactDetailsDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.model.Contact;
import org.techchallengeteam8.phonebookserver.model.ContactDetails;
import org.techchallengeteam8.phonebookserver.repositories.ContactRepository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@Sql(scripts = {"classpath:db/insertContactsShort.sql"})
@SpringBootTest
class ContactServiceImplTest {

    @Autowired
    ContactService contactService;

    @Autowired
    ContactRepository contactRepository;

    @Test
    void getAllContacts() {
        List<BasicContactDto> contacts = contactService.getAllContacts();
        assertEquals(2, contacts.size());
    }

    @Test
    @Transactional
    void getContactById() {
        Long id = contactRepository.findContactByFirstName("John").getId();
        ContactDetailsDto contactDetailsDto = ContactDetailsDto.builder()
                .type("Phone")
                .info("555-1234")
                .build();
        ExtendedContactDto contactDto = contactService.getContactById(id);
        assertEquals("John", contactDto.getFirstName());
        assertEquals(contactDetailsDto, contactDto.getContactDetailsDtos().get(0));
    }

    @Test
    void saveContact() {
        List<BasicContactDto> contacts = contactService.getAllContacts();

        ContactDetails contactDetails = ContactDetails.builder()
                .type("Email")
                .info("judith.ross@gmail.com")
                .build();
        Contact contact = new Contact();
        contact.setFirstName("Judith");
        contact.setLastName("Ross");
        contact.setJobTitle("Software Engineer");
        contact.setContactDetails(List.of(contactDetails));
        contact.setAddress("123 Main St, New York, NY 10001");

        contactService.saveContact(contact);

        List<BasicContactDto> newContacts = contactService.getAllContacts();
        assertEquals(contacts.size() + 1, newContacts.size());
    }

    @Test
    void deleteContact() {
    }

    @Test
    void searchContacts() {
    }
}