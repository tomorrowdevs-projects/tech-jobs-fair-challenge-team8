import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import ContactDetailsModal from "./ContactDetailsModal";

const ContactsList = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleShowDetails = (contact) => {
    setSelectedContact(contact);
  };

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
            <div className="col-6 col-md-3">
              <strong>
                {contact.firstName} {contact.lastName}
              </strong>
            </div>
            <div className="col-md-2">{contact.company}</div>
            <div className="col-md-2 d-none d-md-block">{contact.position}</div>
            <div className="col-md-3 d-none d-lg-block">{contact.email}</div>
            <div className="col-md-2 d-none d-xl-block">
              {contact.telephoneNumber}
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
