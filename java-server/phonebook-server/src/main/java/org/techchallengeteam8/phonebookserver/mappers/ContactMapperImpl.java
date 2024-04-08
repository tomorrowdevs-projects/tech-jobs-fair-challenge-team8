package org.techchallengeteam8.phonebookserver.mappers;

import org.springframework.stereotype.Component;
import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ContactDetailsDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.model.Contact;
import org.techchallengeteam8.phonebookserver.model.ContactDetails;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;

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
                .contactDetails(Optional.ofNullable(contact.getContactDetails())
                        .map(details -> details.stream().map(this::toContactDetailsDto).toList())
                        .orElse(Collections.emptyList()))
                .build();
    }

    @Override
    public Contact mergeToContact(Contact contact, ExtendedContactDto contactDto) {
        contact.setFirstName(contactDto.getFirstName());
        contact.setLastName(contactDto.getLastName());
        contact.setJobTitle(contactDto.getJobTitle());
        contact.setCompany(contactDto.getCompany());
        contact.setAddress(contactDto.getAddress());
        contact.setCity(contactDto.getCity());
        contact.setZipCode(contactDto.getZipCode());
        contact.setCountry(contactDto.getCountry());

        // Always clear the existing ContactDetails, as we're going to replace them
        contact.getContactDetails().clear();

        // Check if there are new ContactDetails to add
        if (contactDto.getContactDetails() != null) {
            contactDto.getContactDetails().forEach(dto -> {
                ContactDetails detail = toContactDetails(dto);
                detail.setContact(contact); // Ensure the back-reference is set
                contact.getContactDetails().add(detail); // Add to the existing collection
            });
        }
        return contact;
    }


    @Override
    public Contact toContact(ExtendedContactDto contactDto) {
        Contact contact = Contact.builder()
                .id(contactDto.getId())
                .firstName(contactDto.getFirstName())
                .lastName(contactDto.getLastName())
                .jobTitle(contactDto.getJobTitle())
                .company(contactDto.getCompany())
                .address(contactDto.getAddress())
                .city(contactDto.getCity())
                .zipCode(contactDto.getZipCode())
                .country(contactDto.getCountry())
                // Initialize contactDetails to an empty list to avoid NullPointerException
                .contactDetails(new ArrayList<>())
                .build();

        // Only proceed if contactDto.getContactDetails() is not null
        Optional.ofNullable(contactDto.getContactDetails()).ifPresent(list ->
                list.forEach(contactDetailsDto -> {
                    ContactDetails contactDetails = toContactDetails(contactDetailsDto);
                    contactDetails.setContact(contact); // Set the contact here
                    contact.getContactDetails().add(contactDetails); // Add to the contact's list of details
                })
        );

        return contact;
    }

    private ContactDetailsDto toContactDetailsDto(ContactDetails contactDetails) {
        return ContactDetailsDto.builder()
                .type(contactDetails.getType())
                .info(contactDetails.getInfo())
                .build();
    }

    private ContactDetails toContactDetails(ContactDetailsDto contactDetailsDto) {
        return ContactDetails.builder()
                .type(contactDetailsDto.getType())
                .info(contactDetailsDto.getInfo())
                .build();
    }
}
