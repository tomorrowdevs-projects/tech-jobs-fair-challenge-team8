import { useState, useEffect } from "react";
import { mockApiData } from "../api-data/mock-api-data";

export const useContactById = (contactId) => {
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContactById = async (id) => {
      setIsLoading(true);
      // Simulate an API call with a delay
      const contact = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockApiData.find((contact) => contact.id === id));
        }, 500);
      });

      setContact(contact);
      setIsLoading(false);
    };

    fetchContactById(contactId);
  }, [contactId]);

  return { contact, isLoading };
};
