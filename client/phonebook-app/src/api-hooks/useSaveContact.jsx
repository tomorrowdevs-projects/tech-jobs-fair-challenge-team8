import { useState } from "react";
import { saveContactUrl, getMethod } from "../util/api-util";

export const useSaveContact = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const apiCall = async (contactData) => {
    const token = sessionStorage.getItem("token");
    const method = getMethod(contactData);
    const response = await fetch(saveContactUrl(), {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) {
      throw new Error("Failed to save contact");
    }
    return await response.json();
  };

  // eslint-disable-next-line no-unused-vars
  const mockApiCall = async (contactData) => {
    return new Promise((resolve, reject) => {
      console.log("Mock saving contact:", contactData);

      setTimeout(() => {
        if (true) {
          resolve("Contact saved successfully (mock)");
        } else {
          reject("Simulated fetch error");
        }
      }, 1000);
    });
  };

  const saveContact = async (contactData) => {
    setIsLoading(true);
    try {
      // Replace with apiCall when ready.
      await apiCall(contactData);
      setIsLoading(false);
      console.log("Contact saved: " + contactData);
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
      console.error(error);

      // Clear the status message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      setIsLoading(false);
      throw error;
    }
  };

  return { saveContact, isLoading, errorMessage };
};
