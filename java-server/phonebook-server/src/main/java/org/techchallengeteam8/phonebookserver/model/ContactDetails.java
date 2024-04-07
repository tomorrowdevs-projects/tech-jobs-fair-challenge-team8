package org.techchallengeteam8.phonebookserver.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "contact_details")
public class ContactDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "contact_id")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Contact contact;

    @Column(name = "type")
    private String type;

    @Column(name = "info")
    private String info;
}
