import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const isUser = Boolean(user);

  const isAdmin = isUser && user.role === "ROLE_ADMIN";

  return { user, setUser, isUser, isAdmin };
};
