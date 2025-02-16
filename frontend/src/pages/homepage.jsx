// src/pages/Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

function Home() {
	return (
		<div className="flex min-h-screen bg-black text-white">
			<Sidebar />
			<div className="flex-grow p-8">
				<h2 className="text-3xl font-bold">
					Welcome to My Stock Training Platform
				</h2>
				<p className="mt-4 text-gray-300">
					Here’s where your homepage content goes.
				</p>
			</div>
		</div>
	);
}

export default Home;
