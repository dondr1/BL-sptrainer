import React, { useState } from 'react';
import '../components/style.css'; // Import the external CSS file
const Sidebar = () => {
	const [isActive, setIsActive] = useState(false);

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
				<li>
					<a href="#">
						<i class="bx bx-universal-access"></i>
						<span className="links_name">Get Help</span>
					</a>
					<span className="tooltip">Help</span>
				</li>

				<li>
					<a href="#">
						<i className="bx bx-line-chart"></i>
						<span className="links_name">Your Well-Being</span>
					</a>
					<span className="tooltip">Well-Being</span>
				</li>

				<li>
					<a href="#">
						<i className="bx bx-chat"></i>
						<span className="links_name">Ask</span>
					</a>
					<span className="tooltip">Ask</span>
				</li>
				<li>
					<a href="#">
						<i class="bx bx-phone-call"></i>
						<span className="links_name">Call 988</span>
					</a>
					<span className="tooltip">Call</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
