import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { useUser } from "../user-management/useUser";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const userFullName = `${user?.firstName} ${user?.lastName}`;

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#" onClick={() => navigate("/contacts")}>
          <strong>TechSolutions Inc.</strong> Phonebook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {user && ( // Only display if user is logged in
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <i className="bi bi-person-circle"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <div className="dropdown-item-text">
                  <strong>{userFullName}</strong>
                </div>
                {user.role === "admin" && (
                  <Dropdown.Item onClick={() => navigate("/register-user")}>
                    Register User
                  </Dropdown.Item>
                )}
                <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
