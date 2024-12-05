import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './App.css'; // Import custom styles

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './components/Home';
import Login from './components/LogIn';
import Signup from './components/Signup.jsx'; // Import your Signup component
import { ComplaintForm } from './components/ComplaintForm.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Define the signup route */}
        <Route path='/ComplaintForm' element={<ComplaintForm/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
