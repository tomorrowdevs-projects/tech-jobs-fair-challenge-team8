import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/login.css";

export default function LoginForm({ onLogin, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    resetFormFields();
  };

  const resetFormFields = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-5 rounded bg-white">
      <Form onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Sign In</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="mt-3 w-100">
          Sign in
        </Button>
      </Form>
    </div>
  );
}
