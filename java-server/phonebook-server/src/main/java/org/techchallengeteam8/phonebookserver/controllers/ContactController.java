package org.techchallengeteam8.phonebookserver.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.services.ContactService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @GetMapping("/contacts")
    public List<BasicContactDto> searchContacts(@RequestParam(value= "search",
            defaultValue="") String keyword) {
        return contactService.searchContacts(keyword);
    }

    @GetMapping("/contacts/{id}")
    public ExtendedContactDto getContactById(@PathVariable Long id) {
        return contactService.getContactById(id);
    }

    @PostMapping("/contacts")
    public ExtendedContactDto saveContact(@RequestBody ExtendedContactDto contactDto) {

        return contactService.saveContact(contactDto);
    }

    @PutMapping("/contacts")
    public ExtendedContactDto updateContact(@RequestBody @Valid ExtendedContactDto contactDto) {
        return contactService.saveContact(contactDto);
    }

    @DeleteMapping("/contacts/{id}")
    public void deleteContact(@PathVariable Long id) {
        contactService.deleteContact(id);
    }
}


