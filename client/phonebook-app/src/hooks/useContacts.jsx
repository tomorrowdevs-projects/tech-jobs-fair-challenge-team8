import { useState, useEffect } from "react";

// Mock contacts data
const mockContacts = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  // Add more contacts as needed
];

export const useContacts = (filters) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setContacts(mockContacts);
    }, 1000); // simulate a delay
  }, []); // The empty array ensures this effect runs only once

  return contacts;
};
