import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const context = useAuth();
  const user = context.user;
  const loading = context.loading;
  if (loading) {
    return null;
  }
  // If the user is not logged in, redirect to login page
  return user != null ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;
