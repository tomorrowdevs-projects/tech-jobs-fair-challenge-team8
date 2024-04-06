import React from "react";
import { Container, Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { useSaveContact } from "../api-hooks/useSaveContact";
import LoaderDots from "../components/LoaderDots";
import {
  getInitialFormData,
  copyContactFormData,
} from "../util/contact-form-util";
import "../styles/contact-form-view.css";

const ContactFormView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { saveContact, isLoading, errorMessage } = useSaveContact();

  const contact = location.state?.contact;
  const initialFormData = contact
    ? copyContactFormData(contact)
    : getInitialFormData();
  const operationType = contact ? "edit" : "add";

  const handleSave = (formData) => {
    if (operationType === "edit") {
      const contactToUpdate = { id: contact.id, ...formData };
      console.log("Updating contact...", contactToUpdate);
    } else {
      // Add new contact
      saveContact(formData)
        .then(() => navigate("/contacts"))
        .catch((err) => {
          console.error("Error saving contact:", err);
        });
    }
  };

  return (
    <Container>
      <div className="loader-container">{isLoading && <LoaderDots />}</div>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <h4 className="mt-1 mb-3">
        {operationType === "edit" ? "Edit Contact" : "Add Contact"}
      </h4>
      <ContactForm
        initialFormData={initialFormData}
        operationType={operationType}
        onSave={handleSave}
        onCancel={() => navigate("/contacts")}
      />
    </Container>
  );
};

export default ContactFormView;
