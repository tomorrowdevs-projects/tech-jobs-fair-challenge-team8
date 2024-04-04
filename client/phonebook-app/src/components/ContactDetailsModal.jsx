import { Modal } from "react-bootstrap";

const ContactDetailsModal = ({ contact, show, onHide }) => {
    if (!contact) return null;
  
    return (
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>{contact.firstName} {contact.lastName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: <strong>{contact.email}</strong></p>
          <p>Phone: <strong>{contact.telephoneNumber}</strong></p>
          <p>Address: <strong>{contact.address}</strong></p>
          <p>Company: <strong>{contact.company}</strong></p>
          <p>Position: <strong>{contact.position}</strong></p>
          {/* You can add more fields or even iterate over them if they are dynamic */}
        </Modal.Body>
      </Modal>
    );
  };

export default ContactDetailsModal;