import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../nav/ThemeToggle";
import MobileMenu from "../nav/MobileMenu";
import { Church, Play, Heart, User, Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Events", path: "/events" },
];

export default function Navbar() {
  const { user, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getDashboardPath = () => {
    if (!user) return "/login";
    switch (user.role) {
      case "SUPERUSER":
        return "/dashboard/superuser";
      case "ADMIN":
        return "/dashboard/admin";
      default:
        return "/dashboard/user";
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo + Church Name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gold">
              <Church className="h-6 w-6" />
            </div>
            <h1 className="flex flex-col leading-none">
              <span className="text-xl font-serif font-bold tracking-tight">
                Everlasting <span className="text-gold">Refuge</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
                Mega Parish
              </span>
            </h1>
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:text-gold ${
                    isActive ? "text-gold" : "text-slate-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right: CTAs + Mobile Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-6">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2.5 bg-gold text-primary text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gold-dark transition-all shadow-gold"
                  >
                    Join Us
                  </Link>
                </>
              ) : (
                <Link
                  to={getDashboardPath()}
                  className="flex items-center gap-2 text-gold hover:text-white transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Dashboard
                  </span>
                </Link>
              )}

              <NavLink
                to="/give"
                className="flex items-center gap-2 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
              >
                <Heart className="h-4 w-4 text-gold fill-gold" />
                Give
              </NavLink>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-slate-300 hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
