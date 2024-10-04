import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  // If the user is not logged in, redirect to login page
  return user ? children : <Navigate to='/Login' />;
};

export default PrivateRoute;
