package org.techchallengeteam8.phonebookserver.mappers;

import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.model.Contact;

public interface ContactMapper {
    BasicContactDto toBaseContactDto(Contact contact);
}
