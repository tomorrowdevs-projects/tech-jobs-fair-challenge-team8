import { useState, useEffect } from "react";
import { mockApiData } from "../util/mock-api-data";
import { getContactsUrl } from "../util/api-util";

// eslint-disable-next-line no-unused-vars
const apiCall = async (searchTerm) => {
  const token = sessionStorage.getItem("token");
  const response = await fetch(getContactsUrl(searchTerm), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
};

// eslint-disable-next-line no-unused-vars
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
            contact.firstName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
          );
        };
        resolve(mockApiData.filter(filterContacts));
      }
    }, 3000);
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
        const data = await apiCall(searchTerm);
        setContacts(data);
        console.log(data);
      } catch (error) {
        setError("Failed to fetch contacts. Please try again later.");
        console.error(error);

        // Clear the error message after 3 seconds
        setTimeout(() => {
          setError(null);
        }, 3000);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { contacts, isLoading, error };
};
