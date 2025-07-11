import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Handle user registration logic
    alert("User registered successfully!");
    navigate('/login');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Create Account</h2>

        <div className="name-group">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="password" placeholder="Password" required />

        <button type="submit" className="register-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
