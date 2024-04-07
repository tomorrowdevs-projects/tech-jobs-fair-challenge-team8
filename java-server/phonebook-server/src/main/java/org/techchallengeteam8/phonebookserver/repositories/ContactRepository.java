package org.techchallengeteam8.phonebookserver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.techchallengeteam8.phonebookserver.model.Contact;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    // Add a query to search for contact by keyword, if it is contained in name, or lastname or address
    @Query("SELECT c FROM Contact c WHERE c.firstName LIKE %?1% " +
            "OR c.lastName LIKE %?1% " +
            "OR c.phoneNumber LIKE %?1% " +
            "OR c.jobTitle LIKE %?1% " +
            "OR c.email LIKE %?1% " +
            "OR c.address LIKE %?1%")
    List<Contact> searchContacts (String keyword);
}
