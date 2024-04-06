import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const isUser = Boolean(user);

  const isAdmin = isUser && user.role === "admin";

  return { user, setUser, isUser, isAdmin };
};
