import React from "react";
import { Container, Alert } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import { useSaveContact } from "../api-hooks/useSaveContact";
import LoaderDots from "../components/LoaderDots";
import "../components-style/contact-form-view.css";

const ContactFormView = () => {
  const contact = null;
  const { saveContact, isLoading, statusMessage, clearMessage } =
    useSaveContact();
  console.log(statusMessage);

  const handleSave = (formData) => {
    // Implement save logic here (create or update based on the presence of contactId)
    console.log("Form data to save:", formData);
    saveContact(formData);
    // Navigate back to the contacts list or elsewhere upon successful save
  };

  return (
    <Container>
      <div className="loader-container">{isLoading && <LoaderDots />}</div>
      {statusMessage && (
        <Alert variant="success" dismissible onClose={clearMessage}>
          {statusMessage}
        </Alert>
      )}
      <h4 className="mt-1 mb-3">Add Contact</h4>
      <ContactForm contact={contact} onSave={handleSave} />
    </Container>
  );
};

export default ContactFormView;

//   {/* <div className="loader-container">{isLoading && <LoaderDots />}</div> */}
