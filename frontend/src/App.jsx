import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/homepage';
import Wellbeing from './pages/wellbeing';
import Help from './pages/help';
import Call988 from './pages/call988';
import './App.css'; // Contains the gradient animation CSS
import About from './pages/about';
import Info from './pages/info';
import Login from './pages/login';
import Signup from './pages/signup';
import Chat from './pages/chat';

function App() {
	return (
		<Router>
			<div className="relative w-screen h-screen overflow-hidden radial-gradient-bg">
				{/* Animated multi-directional gradient background */}
				<div className="absolute inset-0 animate-gradient-move z-[-1]"></div>

				{/* Fixed navbar at the top */}
				<Navbar />

				{/* Fixed sidebar on the left */}
				<Sidebar />

        {/* Main content area dynamically changes based on route */}
        <div className="relative z-10 pt-16 ml-[69px] p-8 h-full overflow-auto">
          <Routes>
            <Route path="/about" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/wellbeing" element={<Wellbeing />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/call988" element={<Call988 />} />
            <Route path="/" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
