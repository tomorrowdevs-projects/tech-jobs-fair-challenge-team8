import { useState } from "react";

export const useSaveContact = () => {
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const saveContact = async (formData) => {
    setIsLoading(true);
    console.log("Saving contact:", formData);
    setTimeout(() => {
      // Simulate API response
      setIsLoading(false);
      setStatusMessage("Contact saved successfully");
    }, 1000);
  };

  const clearMessage = () => {
    setStatusMessage(null);
  };

  return { saveContact, isLoading, statusMessage, clearMessage };
};
