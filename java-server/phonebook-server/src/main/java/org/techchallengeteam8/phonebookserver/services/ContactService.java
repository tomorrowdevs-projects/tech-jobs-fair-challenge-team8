package org.techchallengeteam8.phonebookserver.services;

import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.model.Contact;

import java.util.List;

public interface ContactService {
    List<BasicContactDto> getAllContacts();
    List<BasicContactDto> searchContacts(String keyword);
    ExtendedContactDto getContactById(Long id);
    Contact saveContact(ExtendedContactDto contactDto);
    void deleteContact(Long id);
}
