package org.techchallengeteam8.phonebookserver.mappers;

import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.model.Contact;

public class ContactMapperImpl implements ContactMapper {
    @Override
    public BasicContactDto toBaseContactDto(Contact contact) {
        return BasicContactDto.builder()
                .id(contact.getId())
                .firstName(contact.getFirstName())
                .lastName(contact.getLastName())
                .jobTitle(contact.getJobTitle())
                .company(contact.getCompany())
                .build();
    }
}
