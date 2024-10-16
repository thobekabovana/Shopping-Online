import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { loginUser  } from '../App/LogInSlice';
import { useNavigate, Link } from 'react-router-dom';


const LogIn = () => {
  const dispatch = useDispatch(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const foundUser  = await dispatch(loginUser ({ email, password })).unwrap(); 
      navigate('/all'); 
      setEmail(''); 
      setPassword(''); 
    } catch (error) {
      if (error.message.includes("Invalid credentials")) {
        alert("Invalid credentials. Please try again."); 
      } else {
        alert("Login failed. Please try again."); 
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold m-4">Login</h2>

        <div className="m-4">
            <input
              type="email"
              className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Email'
            />
        
        </div>

        <div className="mb-4">
            <input
              type="password"
              className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} 
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-black-600">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default LogIn;