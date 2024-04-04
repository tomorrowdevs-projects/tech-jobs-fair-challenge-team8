import { Modal, Spinner } from "react-bootstrap";
import { useContactById } from "../hooks/useContactById";

const ContactDetailsModal = ({ contactId, show, onHide }) => {
  const { contact, isLoading } = useContactById(contactId);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {isLoading ? "" : `${contact?.firstName} ${contact?.lastName}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <p>
              Email: <strong>{contact?.email}</strong>
            </p>
            <p>
              Phone: <strong>{contact?.telephoneNumber}</strong>
            </p>
            <p>
              Address: <strong>{contact?.address}</strong>
            </p>
            <p>
              Company: <strong>{contact?.company}</strong>
            </p>
            <p>
              Position: <strong>{contact?.position}</strong>
            </p>
            {/* Additional fields */}
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ContactDetailsModal;
