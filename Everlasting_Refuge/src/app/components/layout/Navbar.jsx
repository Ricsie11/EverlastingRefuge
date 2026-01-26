import { NavLink } from "react-router-dom";
import ThemeToggle from "../nav/ThemeToggle";
import { Church } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
   <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-zinc-950/80 dark:border-gray-800 shadow-md transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      
      {/* Left: Logo + Church Name */}
      <div className="flex items-center gap-2 -ml-4">
        <Church className="h-10 w-10 text-blue-600" />
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          Everlasting Refuge
        </h1>
      </div>

      {/* Center: Nav Links */}
      <div className="flex-1 flex justify-center gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Right: Theme Toggle */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>

    </div>
  </div>
</nav>
  );
}
