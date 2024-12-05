import React from 'react';
import { Navigation } from './Navigation';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'; // Properly import all components

export const ComplaintForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert('Thanks for registering! You will be addressed by our admin, and an agent will be assigned to resolve your problem.');
  };

  return (
    <>
      <Navigation />
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col md={4}>
            <h4 className="text-center mb-4">Complaint Registration Form</h4>
            <Form onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" required />
              </Form.Group>

              {/* Department Input */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Enter your Department" required />
              </Form.Group>

              {/* Register Number Input */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Register No</Form.Label>
                <Form.Control type="number" placeholder="Eg 110821104001" required />
              </Form.Group>

              {/* Dropdown for Year */}
              <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Label>Select Year</Form.Label>
                <Form.Select aria-label="Select Role" required>
                  <option value="">Select...</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </Form.Select>
              </Form.Group>

              {/* Complaint Textarea */}
              <Form.Group className="mb-3">
                <Form.Label>Complaint</Form.Label>
                <Form.Control
                  as="textarea"
                  id="complaint"
                  rows={4}
                  placeholder="Enter your complaint.."
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <div className="text-center mb-3">
                <Button variant="outline-danger" type="submit">
                  REGISTER
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
