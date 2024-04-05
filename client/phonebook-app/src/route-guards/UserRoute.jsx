import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../user-management/useUser";

const UserRoute = ({ element: Component }) => {
  const { user } = useUser();

  // Return either the component for the route or redirect to login
  return user ? Component : <Navigate to="/" replace />;
};

export default UserRoute;
