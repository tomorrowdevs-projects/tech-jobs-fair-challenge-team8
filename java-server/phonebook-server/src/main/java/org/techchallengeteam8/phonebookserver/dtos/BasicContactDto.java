package org.techchallengeteam8.phonebookserver.dtos;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BasicContactDto {
    private Long id;

    private String firstName;

    private String lastName;

    private String jobTitle;

    private String company;
}
