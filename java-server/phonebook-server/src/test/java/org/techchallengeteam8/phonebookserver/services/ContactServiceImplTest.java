package org.techchallengeteam8.phonebookserver.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;
import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ContactDetailsDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.mappers.ContactMapper;
import org.techchallengeteam8.phonebookserver.repositories.ContactRepository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@Sql(scripts = {"classpath:db/insertContactsShort.sql"})
@SpringBootTest
class ContactServiceImplTest {

    @Autowired
    ContactService contactService;

    @Autowired
    ContactRepository contactRepository;

    @Autowired
    ContactMapper contactMapper;

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
        assertEquals(contactDetailsDto, contactDto.getContactDetails().get(0));
    }

    @Test
    void saveContact() {
        List<BasicContactDto> contacts = contactService.getAllContacts();

        ContactDetailsDto contactDetailsDto = ContactDetailsDto.builder()
                .type("Email")
                .info("judith.ross@gmail.com")
                .build();
        ExtendedContactDto contactDto = new ExtendedContactDto();
        contactDto.setFirstName("Judith");
        contactDto.setLastName("Ross");
        contactDto.setJobTitle("Software Engineer");
        contactDto.setContactDetails(List.of(contactDetailsDto));
        contactDto.setAddress("123 Main St, New York, NY 10001");

        ExtendedContactDto contact = contactService.saveContact(contactDto);

        List<BasicContactDto> newContacts = contactService.getAllContacts();
        assertEquals(contacts.size() + 1, newContacts.size());
        assertEquals("Judith", contact.getFirstName());
        assertNotNull(contact.getId());
    }

    @Test
    @Transactional
    void saveContactWithExistingId() {
        Long id = contactRepository.findContactByFirstName("John").getId();
        ContactDetailsDto contactDetailsDto = ContactDetailsDto.builder()
                .type("Phone")
                .info("555-1234")
                .build();
        ExtendedContactDto contactDto = contactService.getContactById(id);
        contactDto.setFirstName("Johnny");
        contactDto.setLastName("Doe");
        contactDto.setJobTitle("Software Engineer");
        contactDto.setContactDetails(List.of(contactDetailsDto));
        contactDto.setAddress("123 Main St, New York, NY 10001");

        ExtendedContactDto contact = contactService.saveContact(contactDto);

        assertEquals("Johnny", contact.getFirstName());
        assertEquals("Doe", contact.getLastName());
        assertEquals("Software Engineer", contact.getJobTitle());
        assertEquals("123 Main St, New York, NY 10001", contact.getAddress());
    }

    @Test
    @Transactional
    void deleteContact() {
        List<BasicContactDto> contacts = contactService.getAllContacts();
        Long id = contactRepository.findContactByFirstName("John").getId();
        contactService.deleteContact(id);
        List<BasicContactDto> newContacts = contactService.getAllContacts();
        assertEquals(contacts.size() - 1, newContacts.size());
    }

    @Test
    void searchContacts() {
        List<BasicContactDto> contacts = contactService.searchContacts("John");
        assertEquals(1, contacts.size());
        assertEquals("John", contacts.get(0).getFirstName());
    }

    @Test
    void searchContacts2() {
        List<BasicContactDto> contacts = contactService.searchContacts("J");
        assertEquals(2, contacts.size());
    }
}