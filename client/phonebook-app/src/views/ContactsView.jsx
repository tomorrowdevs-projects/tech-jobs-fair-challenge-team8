import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactsFilter from "../components/ContactsFilter";
import ContactsGrid from "../components/ContactsGrid";
import { useContacts } from "../hooks/useContacts"; // Assuming the custom hook's path
import AddContactButton from "../components/AddContactButton";
import LoaderDots from "../components/LoaderDots";

import "../components-style/contacts-view.css";

const ContactsView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { contacts, isLoading } = useContacts(searchTerm);

  return (
    <Container>
      <Row className="loader-stripe-container">
        {isLoading && <LoaderDots />}
      </Row>
      <Row className="mt-1 mb-4">
        <Col className="col">
          <ContactsFilter onSearchTermChange={setSearchTerm} />
        </Col>
        <Col className="col-auto">
          <AddContactButton />
        </Col>
      </Row>
      <ContactsGrid contacts={contacts} />
    </Container>
  );
};

export default ContactsView;
