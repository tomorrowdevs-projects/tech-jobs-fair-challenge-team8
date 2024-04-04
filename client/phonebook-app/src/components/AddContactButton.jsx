import { Button } from "react-bootstrap";

const AddContactButton = ({ onClick }) => {
  return (
    <Button variant="dark" onClick={onClick}>
      Add Contact
    </Button>
  );
};

export default AddContactButton;
