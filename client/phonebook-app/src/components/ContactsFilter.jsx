import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const ContactsFilter = ({ onSearchTermChange }) => {
  const [typedValue, setTypedValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(`Search term changed - ${typedValue}`);
      onSearchTermChange(typedValue);
    }, 500); // Waits 500ms after the user stops typing to make the API call

    return () => clearTimeout(timerId); // Cleanup the timeout on component unmount or if the value changes
  }, [typedValue, onSearchTermChange]);

  return (
    <Form.Control
      type="text"
      placeholder="Search contacts"
      onChange={(e) => setTypedValue(e.target.value)}
    />
  );
};

export default ContactsFilter;
