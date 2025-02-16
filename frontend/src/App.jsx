// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/homepage';

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar at the top */}
			<Navbar />

			{/* Main content (homepage) in the center */}
			<div className="flex-grow">
				<Home />
			</div>
		</div>
	);
}

export default App;
