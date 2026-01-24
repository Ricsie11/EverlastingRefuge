import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <Link to="/" className="font-bold text-lg">
        Everlasting Refuge
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Menu className="md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;