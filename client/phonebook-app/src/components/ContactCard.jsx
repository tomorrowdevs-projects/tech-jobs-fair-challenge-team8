import { Card } from "react-bootstrap";
import "../components-style/contact-card.css";

const ContactCard = ({ contact, handleShowDetails }) => {
  return (
    <Card
      onClick={() => handleShowDetails(contact)}
      className="h-100 card-raise-hover"
    >
      <Card.Body>
        <Card.Title>
          {contact.firstName} {contact.lastName}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {contact.company} - {contact.position}
        </Card.Subtitle>
        <Card.Text>
          {contact.email}
          <br />
          {contact.telephoneNumber}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
