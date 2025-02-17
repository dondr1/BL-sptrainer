import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	return (
		<div className="flex h-[85vh] mt-[-40px] rounded-lg mb-10 overflow-hidden">
			<div className="bg-white flex flex-col justify-center items-center w-full">
				<div className="max-w-sm w-full px-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Create an Account
					</h2>
					<form className="w-full space-y-4">
						{/* Full Name */}
						<div>
							<label className="block text-gray-700 mb-1">Full Name</label>
							<input
								type="text"
								className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>
						</div>
						{/* Username */}
						<div>
							<label className="block text-gray-700 mb-1">Username</label>
							<input
								type="text"
								className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>
						</div>
						{/* Phone Number & Age side by side */}
						<div className="flex gap-4">
							<div className="flex-1">
								<label className="block text-gray-700 mb-1">Phone Number</label>
								<input
									type="text"
									className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
									required
								/>
							</div>
							<div className="flex-1">
								<label className="block text-gray-700 mb-1">Age</label>
								<input
									type="number"
									className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
									required
								/>
							</div>
						</div>
						{/* Organization Name */}
						<div>
							<label className="block text-gray-700 mb-1">
								Organization Name
							</label>
							<input
								type="text"
								className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>
						</div>
						{/* Password */}
						<div>
							<label className="block text-gray-700 mb-1">Password</label>
							<input
								type="password"
								className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>
						</div>
						<button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition font-semibold">
							Sign Up
						</button>
					</form>
					<p className="mt-4 text-gray-600 text-center">
						Already have an account?{' '}
						<Link to="/login" className="text-blue-400 hover:underline">
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
