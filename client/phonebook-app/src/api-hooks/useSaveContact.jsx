import { useState } from "react";
import { saveContactUrl } from "../api-data/apiUrls";

export const useSaveContact = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const apiCall = async (formData) => {
    const token = sessionStorage.getItem("token");
    const response = await fetch(saveContactUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to save contact");
    }
    return await response.json();
  };

  const mockApiCall = async (formData) => {
    return new Promise((resolve, reject) => {
      console.log("Mock saving contact:", formData);

      setTimeout(() => {
        if (true) {
          resolve("Contact saved successfully (mock)");
        } else {
          reject("Simulated fetch error");
        }
      }, 1000);
    });
  };

  const saveContact = async (formData) => {
    setIsLoading(true);
    try {
      // Replace with apiCall when ready.
      await mockApiCall(formData);
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
      console.error(error);

      // Clear the status message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return { saveContact, isLoading, errorMessage };
};
