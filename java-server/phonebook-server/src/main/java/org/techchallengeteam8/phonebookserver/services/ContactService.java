package org.techchallengeteam8.phonebookserver.services;

import org.techchallengeteam8.phonebookserver.model.Contact;

import java.util.List;

public interface ContactService {
    List<Contact> getAllContacts();
    Contact getContactById(Long id);
    Contact saveContact(Contact contact);
    void deleteContact(Long id);

    List<Contact> searchContacts(String name);
}
