import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { contactTypes } from "../util/contact-form-util";

const ContactForm = ({ initialFormData, operationType, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialFormData);

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
      contactDetails: [...formData.contactDetails, { type: "", info: "" }],
    });
  };

  const handleRemoveDetail = (index) => {
    const newDetails = formData.contactDetails.filter((_, i) => i !== index);
    setFormData({ ...formData, contactDetails: newDetails });
  };

  const handleDetailChange = (e, index, field) => {
    const updatedDetails = formData.contactDetails.map((entry, i) =>
      i === index ? { ...entry, [field]: e.target.value } : entry
    );
    setFormData({ ...formData, contactDetails: updatedDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out empty contact info entries
    const cleanedContactInfo = formData.contactDetails.filter(
      (entry) => entry.type !== "" && entry.info !== ""
    );

    // Prepare the final contact object, excluding empty contact info entries
    const finalContactData = {
      ...formData,
      contactDetails: cleanedContactInfo,
    };
    onSave(finalContactData);
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={formData.lastName}
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
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
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
                  name="zipCode"
                  value={formData.zipCode}
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
              {formData.contactDetails.map((entry, index) => (
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
          <Button variant="secondary" className="me-2" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="dark" type="submit">
            {operationType === "edit" ? "Update Contact" : "Save Contact"}
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  );
};

export default ContactForm;
