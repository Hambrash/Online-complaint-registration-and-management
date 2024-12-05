import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Container, Row, Col, Button, Form } from 'react-bootstrap'; // Import all required Bootstrap components
import { Navigation } from './Navigation'; // Ensure Navigation component is functional


export const LogIn = () => {

  return (
    <>
      {/* Navigation Bar */}
      <Navigation />

      {/* Login Form */} <br /><br />
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col md={4}>
            <h3 className="text-center mb-4">Login</h3>
            <Form>
              {/* Email Input */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              {/* Password Input */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {/* Submit Button */}
              <div className="text-center mb-3">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>

              {/* Signup Link */}
              <p className="text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary">
                  Signup 
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LogIn;
