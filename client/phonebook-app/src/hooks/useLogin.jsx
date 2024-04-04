import { useUser } from "../user-management/useUser";
import { useState } from "react";

export function useLogin(navigate) {
  const { setUser } = useUser();
  const [error, setError] = useState(null);

  async function loginApi(email, password) {
    // Replace with your actual login API call logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "admin@admin.com" && password === "password") {
          resolve({
            name: "John Doe",
            email: "admin@admin.com",
            role: "admin",
            token: "kjooi3j4okllllllkjsdsajdiopsad",
          });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  }

  const login = async (email, password) => {
    try {
      const user = await loginApi(email, password);
      setUser(user);
      navigate("/contacts");

      // Handle post-login actions here (e.g., redirecting)
    } catch (error) {
      console.error(error);
      setError("Invalid login credentials. Please try again.");
      // Handle login error (e.g., showing an error message)
    }
  };

  return { login, error };
}
