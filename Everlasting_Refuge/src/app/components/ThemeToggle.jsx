import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        bg-gray-200 dark:bg-gray-800
        text-gray-800 dark:text-gray-200
        hover:bg-gray-300 dark:hover:bg-gray-700
        transition-colors duration-300
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-primary
      "
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      <span className="font-medium">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}