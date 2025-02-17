import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../api/api';

const Signup = () => {
    const [userData, setUserData] = useState({
        real_name: "",
        uname: "",
        phone_no: "",
        pwd: "",
        age: "",
        org_name: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signupUser(userData);
            alert('SignUp successful! Please log in.');
            navigate('/login');
        } catch (error) {
            alert('SignUp failed. Please try again.');
            console.error(error);
        }
    };

	return (
		<div className="flex h-[85vh] mt-[-40px] rounded-lg mb-10 overflow-hidden">
			<div className="bg-white flex flex-col justify-center items-center w-full">
				<div className="max-w-sm w-full px-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Create an Account
					</h2>
					<form onSubmit={handleSignUp} className="w-full space-y-4">
						{/* Full Name */}
						<div>
							<label className="block text-gray-700 mb-1">Full Name</label>
							<input
								type="text"
                                name="real_name"
								className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								onChange={handleChange}
                                required
							/>
						</div>
						{/* Username */}
						<div>
							<label className="block text-gray-700 mb-1">Username</label>
							<input
								type="text"
                                name="uname"
								className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								onChange={handleChange}
                                required
							/>
						</div>
						{/* Phone Number & Age side by side */}
						<div className="flex gap-4">
							<div className="flex-1">
								<label className="block text-gray-700 mb-1">Phone Number</label>
								<input
									type="text"
                                    name="phone_no"
									className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
									onChange={handleChange}
                                    required
								/>
							</div>
							<div className="flex-1">
								<label className="block text-gray-700 mb-1">Age</label>
								<input
									type="number"
                                    name="age"
									className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
									onChange={handleChange}
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
                                name="org_name"
								className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								onChange={handleChange}
                                required
							/>
						</div>
						{/* Password */}
						<div>
							<label className="block text-gray-700 mb-1">Password</label>
							<input
								type="password"
								name="pwd"
								className="w-full px-3 py-2 text-black rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								onChange={handleChange}
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
