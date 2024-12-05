import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const RegisterComplaint = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ComplaintForm'); // Replace '/complaint-form' with your desired route
  };

  return (
    <Button 
      variant="outline-danger" 
      className="text-center" 
      onClick={handleClick}
    >
      Register a Complaint
    </Button>
  );
};
