import { Row, Col, Modal } from "react-bootstrap";
import LoaderDots from "./LoaderDots";
import { useContactById } from "../hooks/useContactById";

const ContactDetailsModal = ({ contactId, show, onHide }) => {
  const { contact, isLoading } = useContactById(contactId);

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {isLoading ? <LoaderDots /> : `${contact?.name} ${contact?.surname}`}
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
    </Modal>
  );
};

export default ContactDetailsModal;
