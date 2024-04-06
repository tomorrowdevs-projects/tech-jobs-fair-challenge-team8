import { useState } from "react";
import { deleteContactByIdUrl } from "../api-data/apiUrls";

// eslint-disable-next-line no-unused-vars
const apiCall = async (contactId) => {
  const response = await fetch(deleteContactByIdUrl(contactId), {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

const mockApiCall = async (contactId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock deleting contact:", contactId);
      resolve();
    }, 500);
  });
};

export const useDeleteContactById = () => {
  const [error, setError] = useState(null);

  const deleteContact = async (contactId) => {
    try {
      // Replace with apiCall when ready.
      await mockApiCall(contactId);
    } catch (error) {
      setError(error.message);
    } finally {
      // Clear the error after 3 seconds
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return { error, deleteContact };
};
