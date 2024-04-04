import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../components-style/signup-form.css"; // Importa il file CSS per lo stile personalizzato

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui bisogna modificare per mandare i dati al server
    console.log(formData);

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container
      fluid
      className='signup-container'
      bg='dark'
      variant='dark'
    >
      <Row
        className='justify-content-center align-items-center'
        style={{ height: "100vh" }}
      >
        <Col
          xs={12}
          sm={8}
          md={6}
          lg={4}
        >
          <Form
            onSubmit={handleSubmit}
            className='signup-form'
          >
            <h3 className='text-center'>Sign Up</h3>
            <Form.Group controlId='formUsername'>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type='text'
                name='username'
                placeholder='Enter Username'
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Enter Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              className='btn-block btn-dark'
            >
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupForm;
