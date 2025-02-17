import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
	const navigate = useNavigate();
  return (
    <nav className="text-white p-4 fixed w-full top-0 left-0 h-16 z-50 relative flex justify-center items-center bg-transparent">
      {/* Logo Image on the left */}
      <img
        src="/images/blnewlogo.svg" // Public folder files should be referenced like this
        alt="Logo"
        className="absolute left-4 h-10 object-contain"
      />

      {/* Centered Title */}
      <h1 className="text-2xl font-bold text-gray-600">SafeTalk.ai</h1>

			{/* About, Home & Info Section (All on the Right Side) */}
			<div className="absolute right-16 flex space-x-6">
				<Link
					to="/about"
					className="text-white text-lg hover:text-gray-300 transition">
					About
				</Link>
				<Link
					to="/"
					className="text-white text-lg hover:text-gray-300 transition">
					Home
				</Link>
				<Link
					to="/info"
					className="text-white text-lg hover:text-gray-300 transition">
					Info
				</Link>
			</div>

      {/* Login Icon on the far right */}
      <div
        className="absolute right-4 group cursor-pointer flex items-center"
        	onClick={() => navigate('/login')}>
        {/* Icon */}
        <i className="bx bx-log-in text-2xl"></i>

				{/* Tooltip BELOW the icon (top-full + mt-1) */}
				<span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-black text-white text-sm py-1 px-2 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible whitespace-nowrap transition-opacity duration-300 z-50">
					Login
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
