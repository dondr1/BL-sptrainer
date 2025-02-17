import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../api/api';

const Signup = () => {
    const [userData, setUserData] = useState({real_name: "", uname: "", phone_no: "", pwd: "", age: "", org_name: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signupUser(userData);
            alert("SignUp Successful! Please log in");
            navigate("/login");
        } catch (error) {
            alert("SignUp failed. Please try again");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h2 className="text-3xl font-bold mb-6">Create an Account</h2>

            <form onSubmit={handleSignUp} className="bg-gray-800 p-8 rounded-lg shadow-md w-80">
                <div className="mb-4">
                    <label className="block mb-2">Full Name:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                        required/>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Username:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                        required/>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Age:</label>
                    <input
                        type="integer"
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                        required/>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">ID:</label>
                    <input
                        type="integer"
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                <label className="block mb-2">Organization Name:</label>
                <input
                    type="integer"
                    className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="mb-4">
                <label className="block mb-2">Password:</label>
                <input
                    type="password"
                    className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={handleChange}
                    required
                />
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition">
                    Sign Up
                </button>
            </form>

            {/* Login Link */}
            <p className="mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-400 hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Signup;
