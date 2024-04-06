import { useState } from "react";
import { saveContactUrl } from "../api-data/apiUrls";

export const useSaveContact = () => {
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const apiCall = async (formData) => {
    const response = await fetch(saveContactUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to save contact");
    }
    return await response.json();
  };

  const mockApiCall = async (formData) => {
    return new Promise((resolve) => {
      console.log("Mock saving contact:", formData);
      setTimeout(() => {
        resolve("Contact saved successfully (mock)");
      }, 1000);
    });
  };

  const saveContact = async (formData) => {
    setIsLoading(true);
    try {
      // Replace with apiCall when ready.
      await mockApiCall(formData);
      setStatusMessage("Contact saved successfully");
    } catch (error) {
      setStatusMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessage = () => {
    setStatusMessage(null);
  };

  return { saveContact, isLoading, statusMessage, clearMessage };
};
