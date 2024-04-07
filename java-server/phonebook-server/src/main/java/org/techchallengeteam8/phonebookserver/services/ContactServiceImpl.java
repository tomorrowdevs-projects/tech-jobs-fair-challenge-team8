package org.techchallengeteam8.phonebookserver.services;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.mappers.ContactMapper;
import org.techchallengeteam8.phonebookserver.model.Contact;
import org.techchallengeteam8.phonebookserver.repositories.ContactRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactMapper contactMapper;

    private final ContactRepository contactRepository;

    @Override
    public List<BasicContactDto> getAllContacts() {
        List<Contact> contacts = contactRepository.findAll();
        return contacts.stream().map(contactMapper::toBaseContactDto).toList();
    }

    @Override
    public List<BasicContactDto> searchContacts(String keyword) {
        return contactRepository.findContactsByKeyword(keyword).stream().map(contactMapper::toBaseContactDto).toList();
    }

    @Override
    public ExtendedContactDto getContactById(Long id) {
        return contactRepository.findById(id).map(contactMapper::toExtendedContactDto).orElseThrow(() ->
                new EntityNotFoundException("Contact not found"));
    }

    @Override
    public Contact saveContact(ExtendedContactDto contactDto) {
        Contact contact;
        if (contactDto.getId() != null) {
            contact = contactRepository.findById(contactDto.getId()).
                    map(existringContact -> contactMapper.mergeToContact(existringContact, contactDto)).
                    orElseThrow(() ->
                    new EntityNotFoundException("Contact not found with ID: " + contactDto.getId()));
        } else {
            contact = contactMapper.toContact(contactDto);
        }
        return contactRepository.save(contact);
    }

    @Override
    public void deleteContact(Long id) {
        try {
            contactRepository.deleteById(id);
        } catch (Exception e) {
            throw new EntityNotFoundException("Contact not found with ID: " + id);
        }
    }
}
