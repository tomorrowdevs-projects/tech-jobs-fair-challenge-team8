import { useState, useEffect } from "react";
import { mockApiData } from "../mock-api-data/mock-api-data";

export const useContacts = (searchTerm) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const filterContacts = (contact) => {
      if (!searchTerm) return true;
      // Check if all the search terms match the contact
      if (
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.job_position.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
      return false;
    };

    setIsLoading(true);
    setTimeout(() => {
      const filteredContacts = mockApiData.filter(filterContacts);
      setContacts(filteredContacts);
      setIsLoading(false);
    }, 2000);
  }, [searchTerm]); // The empty array ensures this effect runs only once

  return { contacts, isLoading };
};
