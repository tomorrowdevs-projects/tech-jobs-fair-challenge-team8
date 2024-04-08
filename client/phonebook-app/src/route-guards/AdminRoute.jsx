import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../user-management/useUser";

const AdminRoute = ({ element: Component }) => {
  const { isAdmin } = useUser();

  return isAdmin ? Component : <Navigate to="/" replace />;
};

export default AdminRoute;
