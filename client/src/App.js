import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AppointmentBooking from './pages/AppointmentBooking';
import PatientLogin from './pages/PatientLogin';
import PatientDashboard from './pages/PatientDashboard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book" element={<AppointmentBooking />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
