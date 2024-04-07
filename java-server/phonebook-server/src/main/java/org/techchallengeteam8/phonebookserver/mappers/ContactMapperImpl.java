package org.techchallengeteam8.phonebookserver.mappers;

import org.springframework.stereotype.Component;
import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ContactDetailsDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.model.Contact;
import org.techchallengeteam8.phonebookserver.model.ContactDetails;

@Component
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

    public ExtendedContactDto toExtendedContactDto(Contact contact) {
        return ExtendedContactDto.builder()
                .id(contact.getId())
                .firstName(contact.getFirstName())
                .lastName(contact.getLastName())
                .jobTitle(contact.getJobTitle())
                .company(contact.getCompany())
                .address(contact.getAddress())
                .city(contact.getCity())
                .zipCode(contact.getZipCode())
                .country(contact.getCountry())
                .contactDetailsDtos(contact.getContactDetails().stream().map(this::toContactDetailsDto).toList())
                .build();
    }

    private ContactDetailsDto toContactDetailsDto(ContactDetails contactDetails) {
        return ContactDetailsDto.builder()
                .type(contactDetails.getType())
                .info(contactDetails.getInfo())
                .build();
    }
}
