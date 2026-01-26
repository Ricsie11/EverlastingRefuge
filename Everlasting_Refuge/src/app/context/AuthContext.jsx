import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    const { data } = await api.post("/api/auth/login/", credentials);
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    await fetchUser();
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const { data } = await api.get("/api/users/me/");
      setUser(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);