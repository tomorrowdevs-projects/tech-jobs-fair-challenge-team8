import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const ContactForm = ({ contact, onSave }) => {
  const initialFormData = {
    name: "",
    surname: "",
    company: "",
    job_position: "",
    address: "",
    city: "",
    zip_code: "",
    country: "",
    contact_info: [{ type: "", info: "" }],
  };

  const [formData, setFormData] = useState(initialFormData);

  const contactTypes = [
    "Home Phone",
    "Mobile Phone",
    "Personal Email",
    "Work Email",
    "Website",
    "Telegram",
    "WhatsApp",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddDetail = () => {
    setFormData({
      ...formData,
      contact_info: [...formData.contact_info, { type: "", info: "" }],
    });
  };

  const handleRemoveDetail = (index) => {
    const newDetails = formData.contact_info.filter((_, i) => i !== index);
    setFormData({ ...formData, contact_info: newDetails });
  };

  const handleDetailChange = (e, index, field) => {
    const updatedDetails = formData.contact_info.map((entry, i) =>
      i === index ? { ...entry, [field]: e.target.value } : entry
    );
    setFormData({ ...formData, contact_info: updatedDetails });
  };

  const handleResetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out empty contact info entries
    const cleanedContactInfo = formData.contact_info.filter(
      (entry) => entry.type !== "" && entry.info !== ""
    );

    // Prepare the final contact object, excluding empty contact info entries
    const finalContactData = {
      ...formData,
      contact_info: cleanedContactInfo,
    };

    onSave(finalContactData);
    handleResetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Body>
          <Row>
            {/* Divide the form into two columns for larger screens */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Job Position"
                  name="job_position"
                  value={formData.job_position}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Zip Code"
                  name="zip_code"
                  value={formData.zip_code}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            {/* Second column for dynamic contact details */}
            <Col md={6}>
              <p>Contact Details</p>
              {formData.contact_info.map((entry, index) => (
                <Row key={index} className="mb-2">
                  <Col>
                    <Form.Select
                      aria-label="Contact type"
                      value={entry.type}
                      onChange={(e) => handleDetailChange(e, index, "type")}
                    >
                      <option value="">Select type</option>
                      {contactTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Enter value"
                      value={entry.info}
                      onChange={(e) => handleDetailChange(e, index, "info")}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemoveDetail(index)}
                    >
                      -
                    </Button>
                  </Col>
                </Row>
              ))}
              <Button variant="outline-dark" onClick={handleAddDetail}>
                Add Detail
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button
            variant="secondary"
            className="me-2"
            onClick={handleResetForm}
          >
            Reset Form
          </Button>
          <Button variant="dark" type="submit">
            Save Contact
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  );
};

export default ContactForm;
