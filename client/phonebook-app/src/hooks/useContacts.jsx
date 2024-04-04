import { useState, useEffect } from "react";

// Mock contacts data
const mockContacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    telephoneNumber: "234 567 890",
    address: "123 Main St",
    company: "ABC Inc",
    position: "Software Engineer",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    telephoneNumber: "345 678 901",
    address: "456 Elm St",
    company: "XYZ Corp",
    position: "Product Manager",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Brown",
    email: "alice@example.com",
    telephoneNumber: "456 789 012",
    address: "789 Oak St",
    company: "123 LLC",
    position: "Designer",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "White",
    email: "bobwhite@example.com",
    telephoneNumber: "567 890 123",
    address: "012 Pine St",
    company: "456 Ltd",
    position: "Developer",
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Green",
    email: "cg@ex.com",
    telephoneNumber: "678 901 234",
    address: "345 Cedar St",
    company: "789 Co",
    position: "Engineer",
  },
  {
    id: 6,
    firstName: "David",
    lastName: "Black",
    email: "db@ex.com",
    telephoneNumber: "789 012 345",
    address: "678 Birch St",
    company: "012 Org",
    position: "Manager",
  },
  {
    id: 7,
    firstName: "Eve",
    lastName: "Blue",
    email: "eb@ex.com",
    telephoneNumber: "890 123 456",
    address: "567 Maple St",
    company: "345 Net",
    position: "Director",
  },
  {
    id: 8,
    firstName: "Frank",
    lastName: "Grey",
    email: "fg@ex.com",
    telephoneNumber: "901 234 567",
    address: "456 Walnut St",
    company: "678 Com",
    position: "Lead",
  },
  {
    id: 9,
    firstName: "Grace",
    lastName: "Red",
    email: "gr@ex.com",
    telephoneNumber: "012 345 678",
    address: "789 Pine St",
    company: "890 Inc",
    position: "Analyst",
  },
  // Add more contacts as needed
];

export const useContacts = (searchTerm) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const filterContacts = (contact) => {
      if (!searchTerm) return true;
      // Check if all the search terms match the contact
      if (
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.telephoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
      return false;
    };

    // Simulate an API call
    setTimeout(() => {
      const filteredContacts = mockContacts.filter(filterContacts);
      setContacts(filteredContacts);
    }, 1000); // simulate a delay
  }, [searchTerm]); // The empty array ensures this effect runs only once

  return contacts;
};
