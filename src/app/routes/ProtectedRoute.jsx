import { useAuth } from "@/app/context/AuthContext"; // adjust path if needed
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ roles = [], children }) {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return null; // optional: add a spinner here

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (roles.length > 0 && !roles.includes(user.role)) {
    // Redirect to correct dashboard if role doesn't match
    switch (user.role) {
      case "SUPERUSER":
        return <Navigate to="/dashboard/superuser" replace />;
      case "ADMIN":
        return <Navigate to="/dashboard/admin" replace />;
      case "USER":
        return <Navigate to="/dashboard/user" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  return children;
}