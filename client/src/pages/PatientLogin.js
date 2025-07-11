import React from 'react';
import './Login.css'; // Reuse same CSS
import { useNavigate } from 'react-router-dom';

function PatientLogin() {
  const navigate = useNavigate();

  const handlePatientLogin = (e) => {
    e.preventDefault();
    // After validation
    navigate('/patient-dashboard');
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handlePatientLogin}>
        <h2>Patient Login</h2>

        <label>Email</label>
        <input type="email" placeholder="Enter email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter password" required />

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default PatientLogin;
