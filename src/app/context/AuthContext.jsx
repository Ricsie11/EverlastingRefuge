import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
    setLoading(false);
  }, []);

  // Mock login function
  const login = async (email, password) => {
    // Check locally created dynamic users
    const localUsers = JSON.parse(localStorage.getItem("createdUsers")) || [];
    const foundUser = localUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      const userData = { email, role: foundUser.role, name: foundUser.name };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return userData;
    }

    // Default built-in Mock users
    let role, name;
    if (email === "super@test.com" && password === "password123") {
      role = "SUPERUSER";
      name = "Super Admin";
    } else if (email === "admin@test.com" && password === "password123") {
      role = "ADMIN";
      name = "Pastor John";
    } else if (email === "user@test.com" && password === "password123") {
      role = "USER";
      name = "Blessed Member";
    } else throw new Error("Invalid credentials");

    const userData = { email, role, name };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the context
export const useAuth = () => useContext(AuthContext);
