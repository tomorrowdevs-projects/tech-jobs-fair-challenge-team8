import { useState, useEffect } from "react";
import { mockApiData } from "../util/mock-api-data";
import { getContactByIdUrl } from "../util/api-util";

// eslint-disable-next-line no-unused-vars
const apiCall = async (contactId) => {
  const token = sessionStorage.getItem("token");
  const response = await fetch(getContactByIdUrl(contactId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

// eslint-disable-next-line no-unused-vars
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
        const data = await apiCall(id);
        setContact(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.log(error);

        // Clear the error after 3 seconds
        setTimeout(() => {
          setError(null);
        }, 3000);
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
