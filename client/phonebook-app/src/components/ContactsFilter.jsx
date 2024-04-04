import { Form } from "react-bootstrap";

const ContactsFilter = ({ onSearchTermChange }) => {
  const handleSearchTermChange = (e) => {
    console.log(`Search term changed - ${e.target.value}`);
    onSearchTermChange(e.target.value);
  };
  return (
    <Form.Control
      name="firstName"
      type="text"
      placeholder="Search contacts"
      onChange={handleSearchTermChange}
    />
  );
};

export default ContactsFilter;
