import React from 'react';

const Navbar = () => {
	return (
		<nav className="bg-red-600 text-white p-4 fixed w-full top-0 left-0 h-16 z-50 relative flex justify-center items-center">
			{/* Logo Image on the left */}
			<img
				src="../../public/images/blnewlogo.svg"
				alt="Logo"
				className="absolute left-4 h-10 object-contain"
			/>

			{/* Centered Title */}
			<h1 className="text-2xl font-bold">You'reNotAlone.ai</h1>

			{/* Login Icon on the right */}
			<div className="absolute right-4 group cursor-pointer flex items-center">
				{/* Icon */}
				<i className="bx bx-log-in text-2xl"></i>

				{/* Tooltip BELOW the icon (top-full + mt-1) */}
				<span
					className="
            absolute
            left-1/2
            transform -translate-x-1/2
            top-full
            mt-1
            bg-black
            text-white
            text-sm
            py-1
            px-2
            rounded
            opacity-0
            invisible
            group-hover:opacity-100
            group-hover:visible
            whitespace-nowrap
            transition-opacity
            duration-300
            z-50
        ">
					Login
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
