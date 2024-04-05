import { Row, Col, Modal, Button } from "react-bootstrap";
import LoaderDots from "./LoaderDots";
import { useContactById } from "../hooks/useContactById";
import { useState } from "react";

const ContactDetailsModal = ({ contactId, show, onHide }) => {
  const { contact, isLoading } = useContactById(contactId);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    // Implement deletion logic here
    console.log("Deleting contact", contactId);
    setShowDeleteConfirm(false);
    onHide(); // Close the details modal as well
  };

  const handleCloseDeleteConfirm = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {isLoading ? (
              <LoaderDots />
            ) : (
              `${contact?.name} ${contact?.surname}`
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6}>
              {isLoading ? (
                <>
                  <p>
                    Company: <LoaderDots />
                  </p>
                  <p>
                    Position: <LoaderDots />
                  </p>
                  <p>
                    Address: <LoaderDots />
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Company: <strong>{contact?.company}</strong>
                  </p>
                  <p>
                    Position: <strong>{contact?.job_position}</strong>
                  </p>
                  <p>
                    Address:{" "}
                    <strong>
                      {contact?.address}, {contact?.city}, {contact?.zip_code},{" "}
                      {contact?.country}
                    </strong>
                  </p>
                </>
              )}
            </Col>
            <Col xs={12} md={6}>
              {contact?.contact_info?.map((info, index) => (
                <p key={index}>
                  {info.type.charAt(0).toUpperCase() + info.type.slice(1)}:{" "}
                  <strong>{info.info}</strong>
                </p>
              ))}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => console.log("Edit logic here")}
          >
            Edit
          </Button>
          <Button variant="danger" onClick={handleDeleteClick}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Modal for Deletion */}
      <Modal
        show={showDeleteConfirm}
        onHide={handleCloseDeleteConfirm}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirm}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactDetailsModal;
