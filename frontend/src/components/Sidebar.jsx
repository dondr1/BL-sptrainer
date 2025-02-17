import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/style.css'; // External CSS for styling

const Sidebar = () => {
	const navigate = useNavigate(); // Hook for navigation

	return (
		<div className="sidebar">
			<div className="logo_content">
				{/* Menu Icon (No Toggle, Just Static) */}
			</div>

			{/* Sidebar Menu */}
			<ul className="nav">
				<li onClick={() => navigate('/help')}>
					<i className="bx bx-universal-access"></i>
					<span className="tooltip">Get Help</span>
				</li>

				<li onClick={() => navigate('/wellbeing')}>
					<i className="bx bx-line-chart"></i>
					<span className="tooltip">Your Well-Being</span>
				</li>

				<li onClick={() => navigate('/chat')}>
					<i className="bx bx-chat"></i>
					<span className="tooltip">Chat</span>
				</li>

				<li onClick={() => navigate('/call988')}>
					<i className="bx bx-phone-call"></i>
					<span className="tooltip">Call 988</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
