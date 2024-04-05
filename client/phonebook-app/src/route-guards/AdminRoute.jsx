import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../user-management/useUser";

const AdminRoute = ({ element: Component }) => {
  const { user } = useUser();

  return user && user.role === "admin" ? (
    Component
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminRoute;
