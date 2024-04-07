package org.techchallengeteam8.phonebookserver.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.techchallengeteam8.phonebookserver.dtos.BasicContactDto;
import org.techchallengeteam8.phonebookserver.dtos.ExtendedContactDto;
import org.techchallengeteam8.phonebookserver.services.ContactService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @GetMapping("/contacts")
    public List<BasicContactDto> searchContacts(@RequestParam(value= "search") String keyword) {
        return contactService.searchContacts(keyword);
    }

    @GetMapping("/contacts/{id}")
    public ExtendedContactDto getContactById(@PathVariable Long id) {
        return contactService.getContactById(id);
    }
}
