import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Login to SafeTalk.ai</h2>

      <form className="bg-gray-800 p-8 rounded-lg shadow-md w-80">
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Username:</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition">
          Login
        </button>
      </form>

      {/* Signup Link */}
      <p className="mt-4">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-400 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
