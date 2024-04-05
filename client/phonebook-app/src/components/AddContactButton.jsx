import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddContactButton = () => {
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate("/contacts/add");
  };

  return (
    <Button variant="dark" onClick={handleAddContact}>
      Add Contact
    </Button>
  );
};

export default AddContactButton;
