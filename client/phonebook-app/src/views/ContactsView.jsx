import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ContactsFilter from "../components/ContactsFilter";
import ContactsGrid from "../components/ContactsGrid";
import { useContacts } from "../api-hooks/useContacts"; // Assuming the custom hook's path
import AddContactButton from "../components/AddContactButton";
import LoaderDots from "../components/LoaderDots";

import "../styles/contacts-view.css";

const ContactsView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshCounter, setRefreshCounter] = useState(0);

  const { contacts, isLoading, error } = useContacts(
    searchTerm,
    refreshCounter
  );

  const triggerRefresh = () => {
    setRefreshCounter((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <Row className="loader-stripe-container">
        {isLoading && <LoaderDots />}
      </Row>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="mt-1 mb-4">
        <Col className="col">
          <ContactsFilter onSearchTermChange={setSearchTerm} />
        </Col>
        <Col className="col-auto">
          <AddContactButton />
        </Col>
      </Row>
      <ContactsGrid contacts={contacts} onDelete={triggerRefresh} />
    </Container>
  );
};

export default ContactsView;
