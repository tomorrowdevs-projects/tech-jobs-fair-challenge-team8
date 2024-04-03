import { Row, Col, Form } from "react-bootstrap";

const ContactsFilter = ({ onFiltersChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log(`Filter changed - ${name}: ${value}`);
    onFiltersChange((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [name]: value,
      };
      console.log("New filters:", newFilters);
      return newFilters;
    });
  };
  return (
    <Row className="mb-3">
      <Col>
        <Form.Control
          name="name"
          type="text"
          placeholder="Search by name"
          onChange={handleFilterChange}
        />
      </Col>
      <Col>
        <Form.Control
          name="email"
          type="text"
          placeholder="Search by email"
          onChange={handleFilterChange}
        />
      </Col>
      <Col>
        <Form.Control
          name="address"
          type="text"
          placeholder="Search by address"
          onChange={handleFilterChange}
        />
      </Col>
      <Col>
        <Form.Control
          name="company"
          type="text"
          placeholder="Search by company"
          onChange={handleFilterChange}
        />
      </Col>
      <Col>
        <Form.Control
          name="position"
          type="text"
          placeholder="Search by position"
          onChange={handleFilterChange}
        />
      </Col>
    </Row>
  );
};

export default ContactsFilter;
