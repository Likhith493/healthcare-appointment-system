import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Top Navigation */}
      <div className="nav-bar">
        <button onClick={() => navigate('/login')} className="nav-btn">Login</button>
        <button onClick={() => navigate('/register')} className="nav-btn">Sign Up</button>
      </div>

      {/* Content */}
      <div className="home-content">
      <img
  src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
  alt="Healthcare"
  className="home-image"
/>

        <div className="home-text">
          <h1>Welcome to the Health Care Appointment System</h1>
          <p>
            This platform was created to simplify and digitize the process of booking medical appointments. 
            Patients can easily schedule consultations, and doctors can manage their availability efficiently. 
            Our goal is to improve healthcare accessibility and reduce waiting times.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
