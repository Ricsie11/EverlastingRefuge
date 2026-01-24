import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";

const RoleContext = createContext(null);

export const RoleProvider = ({ children }) => {
  const { user } = useAuth();

  const role = user?.role || "USER";

  return (
    <RoleContext.Provider value={{ role }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);