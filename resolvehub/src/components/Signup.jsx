import React from 'react';
import { Navigation } from './Navigation'; // Ensure Navigation component exists and is functional
import { Container, Row, Col, Button, Form } from 'react-bootstrap'; // Properly import all components
import { Link } from 'react-router-dom'; // Import Link for navigation


export const Signup = () => {

  return (
    <>
      {/* Navigation Bar */}
      <Navigation />

      {/* Signup Form */}
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col md={4}>
            <h4 className="text-center mb-4">ResolveHub-Signup</h4>
            <Form>
              {/* Full Name Input */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" />
              </Form.Group>

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

              {/* Mobile Number Input */}
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control type="tel" placeholder="Enter 10 digits Number" />
              </Form.Group>

              {/* Dropdown for User Role */}
              <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Label>Select Role</Form.Label>
                <Form.Select aria-label="Select Role">
                  <option value="">Select...</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="engineer">Engineer</option>
                </Form.Select>
              </Form.Group>

              {/* Submit Button */}
              <div className="text-center mb-3">
                <Button variant="primary" type="submit">
                  Signup
                </Button>
              </div>

              {/* Link to Login Page */}
              <p className="text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-primary">
                  Login 
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
