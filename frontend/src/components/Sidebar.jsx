import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../components/style.css'; // Import the external CSS file

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Toggle the "active" class, changing sidebar width from 78px to 240px
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="logo_content">
        {/* The menu icon stays top-left, never moves */}
        <div className="logo">
          <div className="menu-icon" onClick={toggleSidebar}>
            <i className="bx bx-menu-alt-left" id="btn"></i>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <ul className="nav">
        <li onClick={() => navigate('/help')}>
          <i className="bx bx-universal-access"></i>
          <span className="links_name">Get Help</span>
          <span className="tooltip">Help</span>
        </li>

        <li onClick={() => navigate('/wellbeing')}>
          <i className="bx bx-line-chart"></i>
          <span className="links_name">Your Well-Being</span>
          <span className="tooltip">Well-Being</span>
        </li>

        <li onClick={() => navigate('/ask')}>
          <i className="bx bx-chat"></i>
          <span className="links_name">Ask</span>
          <span className="tooltip">Ask</span>
        </li>

        <li onClick={() => navigate('/call988')}>
          <i className="bx bx-phone-call"></i>
          <span className="links_name">Call 988</span>
          <span className="tooltip">Call</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
