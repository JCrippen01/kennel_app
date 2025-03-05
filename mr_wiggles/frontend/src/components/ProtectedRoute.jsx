// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  if (!authToken) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
