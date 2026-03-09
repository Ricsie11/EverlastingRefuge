import { useAuth } from "@/app/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Church, LogOut, Shield } from "lucide-react";
import UserOverview from "./UserOverview";

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isAdmin = user?.role === "ADMIN" || user?.role === "SUPERUSER";

  return (
    <div className="min-h-screen bg-background">
      {/* Header: Navy bar */}
      <header className="bg-primary text-white h-16 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gold">
            <Church className="w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-lg tracking-tight">
            Everlasting Refuge
          </span>
        </Link>
        <div className="flex items-center gap-4">
          {isAdmin && (
            <Link
              to={
                user.role === "SUPERUSER"
                  ? "/dashboard/superuser"
                  : "/dashboard/admin"
              }
              className="text-sm font-bold text-gold hover:text-white transition-colors flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Admin Panel</span>
            </Link>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <UserOverview />
      </main>
    </div>
  );
}
