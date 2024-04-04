import { Modal } from "react-bootstrap";
import LoaderDots from "./LoaderDots";
import { useContactById } from "../hooks/useContactById";

const ContactDetailsModal = ({ contactId, show, onHide }) => {
  const { contact, isLoading } = useContactById(contactId);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {isLoading ? (
            <LoaderDots />
          ) : (
            `${contact?.firstName} ${contact?.lastName}`
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading ? (
          <div>
            <p>
              Email: <LoaderDots />
            </p>
            <p>
              Phone: <LoaderDots />
            </p>
            <p>
              Address: <LoaderDots />
            </p>
            <p>
              Company: <LoaderDots />
            </p>
            <p>
              Position: <LoaderDots />
            </p>
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
