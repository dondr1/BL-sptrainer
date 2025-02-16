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
		</nav>
	);
};

export default Navbar;
