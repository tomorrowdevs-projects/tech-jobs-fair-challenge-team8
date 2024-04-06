import { useState, useEffect } from "react";
import { mockApiData } from "../api-data/mock-api-data";
import { getContactByIdUrl } from "../api-data/apiUrls";

// eslint-disable-next-line no-unused-vars
const apiCall = async (contactId) => {
  const response = await fetch(getContactByIdUrl(contactId));
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

const mockApiCall = async (contactId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const contact = mockApiData.find((contact) => contact.id === contactId);
      resolve(contact);
    }, 500);
  });
};

export const useContactById = (contactId) => {
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactById = async (id) => {
      setIsLoading(true);
      try {
        // Replace with apiCall when ready.
        const data = await mockApiCall(id);
        setContact(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (contactId) {
      fetchContactById(contactId);
    }
  }, [contactId]);

  return { contact, isLoading, error };
};
