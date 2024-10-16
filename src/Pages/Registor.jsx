import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../App/RegisterSlice';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Clear any previous error messages
    setError(null);
  
    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
  
    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format!');
      return;
    }
  
    const newUser  = { email, password };
  
    try {
      // Attempt to register the user
      await dispatch(registerUser (newUser )).unwrap();
      
      // Navigate to the login page upon successful registration
      navigate('/login');
    } catch (error) {
      // Handle registration failure
      setError('Registration failed. Please try again.');
      console.error('Failed to register:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <div className="m-4">
          <input
            type="email"
            className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />
        </div>

        {error && (
          <div className="mb-4 text-red-500">{error}</div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;