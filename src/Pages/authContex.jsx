// src/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.login.user); 
  const [loggedInUser , setLoggedInUser ] = useState(null);

  useEffect(() => {
    setLoggedInUser (user);
  }, [user]);

  const login = (userData) => {
    setLoggedInUser (userData);
  };

  return (
    <AuthContext.Provider value={{ user: loggedInUser , login }}>
      {children}
    </AuthContext.Provider>
  );
};