import { Card } from "react-bootstrap";
import "../styles/contact-card.css";

const ContactCard = ({ contact, handleShowDetails }) => {
  return (
    <Card
      onClick={() => handleShowDetails(contact)}
      className="h-100 card-raise-hover"
    >
      <Card.Body>
        <Card.Title>
          {contact.name} {contact.surname}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {contact.company} - {contact.job_position}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
