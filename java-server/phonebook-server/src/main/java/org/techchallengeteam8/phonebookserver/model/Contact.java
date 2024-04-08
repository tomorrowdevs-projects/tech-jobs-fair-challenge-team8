package org.techchallengeteam8.phonebookserver.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="contact")
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

    @Column(name="company")
    private String company;

    @Column(name="address")
    private String address;

    @Column(name="city")
    private String city;

    @Column(name="zip_code")
    private String zipCode;

    @Column(name="country")
    private String country;

    @OneToMany(mappedBy = "contact", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ContactDetails> contactDetails;
}
