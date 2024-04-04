import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import ContactDetailsModal from './ContactDetailsModal';

const ContactsList = ({ contacts }) => {

  const [selectedContact, setSelectedContact] = useState(null);

  const handleShowDetails = (contact) => {
    console.log("Show details for contact:", contact);
    setSelectedContact(contact);
  }

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  return (
    <>
      <ListGroup>
        {contacts.map((contact) => (
          <ListGroup.Item
            action
            key={contact.id}
            onClick={() => handleShowDetails(contact)}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{contact.firstName} {contact.lastName}</div>
              {contact.company} - {contact.position}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <ContactDetailsModal
        contact={selectedContact}
        show={selectedContact != null}
        onHide={handleCloseModal}
      />
    </>
  );
};

export default ContactsList;
