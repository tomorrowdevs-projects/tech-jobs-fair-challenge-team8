import { getLoginUrl } from "../util/api-util";
import { useUser } from "../user-management/useUser";
import { useState } from "react";
import { authorizedMockUsers } from "../util/mock-api-data";

export function useLogin(navigate) {
  const { setUser } = useUser();
  const [error, setError] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const apiCall = async (email, password) => {
    const response = await fetch(getLoginUrl(), {
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

  // eslint-disable-next-line no-unused-vars
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
    setError(null);

    try {
      // Replace with apiCall when backend is ready
      const { firstName, lastName, role, token } = await apiCall(
        email,
        password
      );

      setUser({ firstName, lastName, role });
      sessionStorage.setItem("token", token);

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
