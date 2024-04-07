package org.techchallengeteam8.phonebookserver.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="first_name")
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    @Column(name="job_title")
    private String jobTitle;
    @Column(name="phone_number")
    private String phoneNumber;
    private String email;
    private String address;
}
