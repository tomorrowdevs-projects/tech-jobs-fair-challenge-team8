import { useState, useEffect } from "react";
import { mockApiData } from "../api-data/mock-api-data";
import { getContactsUrl } from "../api-data/apiUrls";

// eslint-disable-next-line no-unused-vars
const apiCall = async (searchTerm) => {
  const response = await fetch(getContactsUrl(searchTerm));
  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
};

const mockApiCall = (searchTerm) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Set to true to simulate error
      if (false) {
        reject("Simulated fetch error");
      } else {
        const filterContacts = (contact) => {
          if (!searchTerm) return true;
          return (
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.job_position
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
        };
        resolve(mockApiData.filter(filterContacts));
      }
    }, 2000);
  });
};

export const useContacts = (searchTerm) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      // Replace with apiCall when ready.
      try {
        const data = await mockApiCall(searchTerm);
        setContacts(data);
      } catch (error) {
        setError("Failed to fetch contacts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { contacts, isLoading, error };
};