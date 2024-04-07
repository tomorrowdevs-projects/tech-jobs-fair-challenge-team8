package org.techchallengeteam8.phonebookserver.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.techchallengeteam8.phonebookserver.model.Contact;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@Sql(scripts = {"classpath:db/insertContacts.sql"})
@SpringBootTest
class ContactServiceImplTest {

    @Autowired
    ContactService contactService;

    @Test
    void getAllContacts() {
        List<Contact> contacts = contactService.getAllContacts();
        assertEquals(3, contacts.size());
    }

    @Test
    void getContactById() {
        Contact contact = contactService.getContactById(1L);
        assertEquals("John", contact.getFirstName());
    }

    @Test
    void saveContact() {
        Contact contact = new Contact();
        contact.setFirstName("Judith");
        contact.setLastName("Ross");
        contact.setJobTitle("Software Engineer");
        contact.setEmail("judith.ross@gmail.com");
        contact.setAddress("123 Main St, New York, NY 10001");
        contactService.saveContact(contact);
        List<Contact> contacts = contactService.getAllContacts();
        assertEquals(4, contacts.size());
    }

    @Test
    void deleteContact() {
    }

    @Test
    void searchContacts() {
    }
}