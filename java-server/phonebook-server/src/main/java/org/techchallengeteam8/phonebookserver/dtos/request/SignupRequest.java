package org.techchallengeteam8.phonebookserver.dtos.request;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest {
    private String firstName;
    private String lastName;
    @Email
    private String email;
    private String password;
}
