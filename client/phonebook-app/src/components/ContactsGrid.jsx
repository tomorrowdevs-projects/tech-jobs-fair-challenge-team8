import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import ContactDetailsModal from "./ContactDetailsModal";
import ContactCard from "./ContactCard";

const ContactsGrid = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleShowDetails = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {contacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard
              contact={contact}
              handleShowDetails={handleShowDetails}
            />
          </Col>
        ))}
      </Row>

      <ContactDetailsModal
        contact={selectedContact}
        show={selectedContact != null}
        onHide={handleCloseModal}
      />
    </>
  );
};

export default ContactsGrid;
