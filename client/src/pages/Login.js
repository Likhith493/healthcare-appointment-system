import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Admin login logic here
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <label>Username</label>
        <input type="text" placeholder="Enter username" required />

        <label>Password</label>
        <input type="password" placeholder="Enter password" required />

        <button type="submit" className="login-btn">Login</button>

        <p className="signup-text">
          New user? <button type="button" onClick={() => navigate('/register')} className="signup-btn">Sign up</button>
        </p>

        <hr />

        <button
          type="button"
          onClick={() => navigate('/patient-login')}
          className="patient-btn"
        >
          Patient Login
        </button>
      </form>
    </div>
  );
}

export default Login;
