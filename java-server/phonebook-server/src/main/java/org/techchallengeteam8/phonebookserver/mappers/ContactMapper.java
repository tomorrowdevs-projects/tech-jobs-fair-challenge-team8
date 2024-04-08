package org.techchallengeteam8.phonebookserver.mappers;

import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.model.Contact;

public interface ContactMapper {
    BasicContactDto toBaseContactDto(Contact contact);
    ExtendedContactDto toExtendedContactDto(Contact contact);
    Contact mergeToContact(Contact contact, ExtendedContactDto contactDto);

    Contact toContact(ExtendedContactDto contactDto);
}
