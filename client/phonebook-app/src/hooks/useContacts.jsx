import { useState, useEffect } from "react";
import { mockApiData } from "../mock-api-data/mock-api-data";

export const useContacts = (searchTerm) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const filterContacts = (contact) => {
      if (!searchTerm) return true;
      // Check if all the search terms match the contact
      if (
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.telephoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
      return false;
    };

    // Simulate an API call
    setTimeout(() => {
      const filteredContacts = mockApiData.filter(filterContacts);
      setContacts(filteredContacts);
    }, 1000); // simulate a delay
  }, [searchTerm]); // The empty array ensures this effect runs only once

  return contacts;
};
