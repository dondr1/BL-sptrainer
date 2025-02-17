import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/homepage';
import Wellbeing from './pages/wellbeing';
import Help from './pages/help';
import Ask from './pages/ask';
import Call988 from './pages/call988';
import './App.css'; // Contains the gradient animation CSS
import About from './pages/about';
import Info from './pages/info';
import Login from './pages/login';
import Signup from './pages/signup';

const AppContent = () => {
	const location = useLocation();

	// Show sidebar on '/wellbeing' and '/about'
	const showSidebar =
		location.pathname === '/wellbeing' || location.pathname === '/info';

	// Check if we're on the About page
	const isAboutPage = location.pathname === '/about';

	return (
		<div
			className={`relative w-screen h-screen overflow-hidden ${
				isAboutPage ? 'bg-black' : 'radial-gradient-bg'
			}`}>
			{!isAboutPage && (
				<div className="absolute inset-0 animate-gradient-move z-[-1]"></div>
			)}

			<Navbar />

			{showSidebar && <Sidebar />}

			<div
				className={`relative z-10 pt-16 p-8 h-full overflow-auto ${
					showSidebar ? 'ml-[69px]' : ''
				}`}>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/help" element={<Help />} />
					<Route path="/wellbeing" element={<Wellbeing />} />
					<Route path="/ask" element={<Ask />} />
					<Route path="/call988" element={<Call988 />} />
					<Route path="/" element={<Home />} />
					<Route path="/info" element={<Info />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>
		</div>
	);
};

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

export default App;
