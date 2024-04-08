package org.techchallengeteam8.phonebookserver.services;

import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;

import java.util.List;

public interface ContactService {
    List<BasicContactDto> getAllContacts();

    List<BasicContactDto> searchContacts(String keyword);

    ExtendedContactDto getContactById(Long id);

    ExtendedContactDto saveContact(ExtendedContactDto contactDto);

    void deleteContact(Long id);
}
