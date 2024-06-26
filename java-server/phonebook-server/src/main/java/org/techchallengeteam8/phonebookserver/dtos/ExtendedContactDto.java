package org.techchallengeteam8.phonebookserver.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExtendedContactDto {
    @NotNull
    private Long id;

    private String firstName;

    private String lastName;

    private String jobTitle;

    private String company;

    private String address;

    private String city;

    private String zipCode;

    private String country;

    private List<ContactDetailsDto> contactDetails;
}


