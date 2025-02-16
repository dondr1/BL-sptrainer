// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/homepage';

function App() {
	return (
		<div className="min-h-screen bg-black text-white">
			{/* Navbar pinned at top (64px height) */}
			<Navbar />

			{/* Sidebar pinned on left (position: fixed in CSS) */}
			<Sidebar />

			{/*
         Main content container is offset by the sidebar’s collapsed width (69px)
         + the navbar’s 64px top. We'll handle top offset with padding or margin.
       */}
			<div className="pt-16 ml-[69px] p-8">
				{/* 
          The 'pt-16' ensures your content starts below the 64px navbar.
          'ml-[69px]' ensures content never hides behind the collapsed sidebar.
        */}
				<Home />
			</div>
		</div>
	);
}

export default App;
