import React, { createContext, useState } from 'react';
import { login, register } from '../services/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (email, password) => {
    try {
      const response = await login(email, password);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const registerUser = async (email, password) => {
    try {
      const response = await register(email, password);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

