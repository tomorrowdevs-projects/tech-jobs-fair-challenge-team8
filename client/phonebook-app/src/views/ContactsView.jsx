import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ContactsFilter from "../components/ContactsFilter";
import ContactsTable from "../components/ContactsTable";
import { useContacts } from "../hooks/useContacts"; // Assuming the custom hook's path

const ContactsView = () => {
  const [filters, setFilters] = useState({
    name: "",
    address: "",
    email: "",
    company: "",
    position: "",
  });
  const contacts = useContacts(filters);

  return (
    <Container>
      <h1>Contacts</h1>
      <ContactsFilter onFiltersChange={setFilters} />
      <ContactsTable contacts={contacts} />
    </Container>
  );
};

export default ContactsView;
