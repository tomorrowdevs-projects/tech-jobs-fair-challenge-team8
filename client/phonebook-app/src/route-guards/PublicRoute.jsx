import { Navigate } from "react-router-dom";
import { useUser } from "../user-management/useUser";

const PublicRoute = ({ element: Component }) => {
  const { user } = useUser();
  return !user ? Component : <Navigate to="/contacts" />;
};

export default PublicRoute;
