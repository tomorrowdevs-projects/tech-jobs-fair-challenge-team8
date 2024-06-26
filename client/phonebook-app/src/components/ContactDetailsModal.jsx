import { Row, Col, Modal, Button } from "react-bootstrap";
import { useContactById } from "../api-hooks/useContactById";
import { useState } from "react";
import { useUser } from "../user-management/useUser";
import { useDeleteContactById } from "../api-hooks/useDeleteContactById";
import { useNavigate } from "react-router-dom";
import InlineLoaderDots from "./InlineLoaderDots";

const ContactDetailsModal = ({ contactId, show, onHide, onDelete }) => {
  const { contact, isLoading } = useContactById(contactId);
  const { deleteContact } = useDeleteContactById(contactId);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const { isAdmin } = useUser();
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/contacts/edit", { state: { contact } });
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    await deleteContact(contactId);
    setShowDeleteConfirm(false);
    onDelete();
    onHide();
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
              <InlineLoaderDots />
            ) : (
              `${contact?.firstName} ${contact?.lastName}`
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6}>
              {isLoading ? (
                <>
                  <p>
                    Company: <InlineLoaderDots />
                  </p>
                  <p>
                    Position: <InlineLoaderDots />
                  </p>
                  <p>
                    Address: <InlineLoaderDots />
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Company: <strong>{contact?.company}</strong>
                  </p>
                  <p>
                    Job Title: <strong>{contact?.jobTitle}</strong>
                  </p>
                  <p>
                    Address:{" "}
                    <strong>
                      {contact?.address}, {contact?.city}, {contact?.zipCode},{" "}
                      {contact?.country}
                    </strong>
                  </p>
                </>
              )}
            </Col>
            <Col xs={12} md={6}>
              {contact?.contactDetails?.map((entry, index) => (
                <p key={index}>
                  {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}:{" "}
                  <strong>{entry.info}</strong>
                </p>
              ))}
            </Col>
          </Row>
        </Modal.Body>
        {isAdmin && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClick}>
              Edit
            </Button>
            <Button variant="danger" onClick={handleDeleteClick}>
              Delete
            </Button>
          </Modal.Footer>
        )}
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
