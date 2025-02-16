// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/homepage';
import './App.css'; // Ensure this file contains the animation CSS

function App() {
	return (
		<div className="relative w-screen h-screen overflow-hidden radial-gradient-bg">
			{/* Fixed navbar on top */}
			<Navbar />

			{/* Fixed sidebar on the left */}
			<Sidebar />

			<div className="relative z-10 pt-16 ml-[69px] p-8 h-full overflow-auto">
				<Home />
			</div>
		</div>
	);
}

export default App;
