import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./user-management/useUser"; // Adjust the import path as needed

const AdminRoute = ({ children }) => {
  const { user } = useUser();

  return user && user.role === "admin" ? children : <Navigate to="/" />;
};

export default AdminRoute;
