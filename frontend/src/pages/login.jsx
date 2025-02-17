import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';

const Login = () => {
	const [userCred, setUserCred] = useState({
		uname: "",
		pwd: ""
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
			setUserCred({ ...userCred, [e.target.name]: e.target.value });
		};

		const handleLogin = async (e) => {
			e.preventDefault();
			try {
				await loginUser(userData);
				localStorage.setItem("uname", userCred.uname);
				navigate('/ask');
			} catch (error) {
				alert('Login failed. Check your credentials.');
				console.error(error);
			}
		};

	return (
		<div className="flex h-[85vh] mt-[-40px] rounded-lg mb-10 overflow-hidden">
			{/* Left Column at 6.5/12 (~54.17%) */}
			<div className="bg-white flex flex-col justify-center items-center w-[54.17%]">
				<div className="max-w-sm w-full px-8">
					<img
						src="/images/blnewlogo.svg"
						alt="Logo"
						className="h-10 object-contain mb-6"
					/>

					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Login to SafeTalk.ai
					</h2>

					<form onSubmit={handleLogin} className="space-y-4">
						<div>
							<label className="block text-gray-700 mb-1">Username</label>
							<input
								type="text"
								name="uname"
								className="text-black w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								onChange={handleChange}
								required
							/>
						</div>

						<div>
							<label className="block text-gray-700 mb-1">Password</label>
							<input
								type="password"
								name="pwd"
								className="text-black w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								onChange={handleChange}
								required
							/>
						</div>

						<button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition font-semibold">
							Login
						</button>
					</form>

					<p className="mt-4 text-gray-600">
						Don’t have an account?{' '}
						<Link to="/signup" className="text-blue-500 hover:underline">
							Sign Up
						</Link>
					</p>
				</div>
			</div>

			{/* Right Column (Image showing the right side) */}
			<div className="w-[45%] bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 relative">
				<img
					src="/images/Feat_suicide_hero.jpg"
					alt="SafeTalk illustration"
					className="
						absolute
						top-0
						left-0
						w-full
						h-full
						object-cover
						object-[72%_50%] /* Positions image from the right, vertically centered */
					"
				/>
			</div>
		</div>
	);
};

export default Login;
