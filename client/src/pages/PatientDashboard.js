import React from 'react';
import './PatientDashboard.css';
import { useNavigate } from 'react-router-dom';

function PatientDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="patient-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Patient Panel</h3>
        <ul>
          <li>Home</li>
          <li>All Doctors</li>
          <li>Scheduled Sessions</li>
          <li>My Bookings</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <h2>Welcome, Patient</h2>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        {/* App Description */}
        <p className="description">
          This platform allows you to easily book medical appointments, view your session schedule, and manage your health journey from anywhere.
        </p>

        {/* Status Cards */}
        <div className="stats">
          <div className="card">👨‍⚕️ Available Doctors: <strong>10</strong></div>
          <div className="card">🏥 Total Patients: <strong>42</strong></div>
          <div className="card">📆 Bookings Today: <strong>6</strong></div>
          <div className="card">🎤 Sessions Today: <strong>2</strong></div>
        </div>

        {/* Upcoming Bookings */}
        <div className="upcoming">
          <h3>📅 Your Upcoming Bookings</h3>
          <ul>
            <li>Dr. Ayesha – 4:00 PM Today</li>
            <li>Dr. Sameer – Tomorrow at 11:30 AM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
