import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../App/LogInSlice';
import { useNavigate, Link } from 'react-router-dom';
import pic from '../assets/images/clv143796700.jpg'

const LogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const foundUser = await dispatch(loginUser({ email, password })).unwrap();
      navigate('/home'); // Navigate to add list page if login is successful
    } catch (error) {
      // Check if the error corresponds to invalid credentials
      if (error.message.includes("Invalid credentials")) {
        alert("Invalid name or password. Please try again."); // Show alert for invalid login details
      } else {
        alert("Login failed. Please try again."); // General error alert
      }
    }
  };

  return (
    <>
    <main style={{ 
               height: '100vh',
              }}>
      <aside>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
             
            </span>
            <input
              type="email"
              className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              
            </span>
            <input
              type="password"
              className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
      </aside>

<aside>
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Don't have an account? <Link to="/sign-up" className="text-blue-500 hover:underline">Register here</Link>.
        </p>
      </div>
      <div>
        <img src={pic} alt="pic"
              style={{marginLeft: "50%"}} />
      </div>
      </aside>
    </main>
    </>
  );
};
export default LogIn;