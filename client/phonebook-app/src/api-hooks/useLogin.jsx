import { loginUrl } from "../api-data/apiUrls";
import { useUser } from "../user-management/useUser";
import { useState } from "react";
import { authorizedMockUsers } from "../api-data/mock-api-data";

export function useLogin(navigate) {
  const { setUser } = useUser();
  const [error, setError] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const apiCall = async (email, password) => {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    return await response.json();
  };

  const mockApiCall = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = authorizedMockUsers.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          resolve(user.user); // Return the user details without password
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const login = async (email, password, onSuccess) => {
    try {
      // Replace with apiCall when backend is ready
      const user = await mockApiCall(email, password);

      setUser(user);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error);
      setError("Invalid login credentials. Please try again.");

      // Clear the error message after 3 seconds
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return { login, error };
}
