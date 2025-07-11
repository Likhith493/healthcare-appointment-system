import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally clear localStorage/session here
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li>Dashboard</li>
          <li>Doctors</li>
          <li>Appointments</li>
          <li>Schedule</li>
          <li>Patients</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <h2>Welcome, Admin</h2>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        <div className="stats">
          <div className="card">👨‍⚕️ Doctors Available: <strong>12</strong></div>
          <div className="card">🏥 Patients Admitted: <strong>28</strong></div>
          <div className="card">📥 New Bookings: <strong>5</strong></div>
        </div>

        <div className="upcoming">
          <h3>Upcoming Appointments & Sessions</h3>
          <ul>
            <li>📅 Dr. Ramesh – 2:00 PM Today</li>
            <li>📅 Dr. Priya – Tomorrow 10:30 AM</li>
            <li>📅 Session: Diabetes Awareness – Friday 4:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
