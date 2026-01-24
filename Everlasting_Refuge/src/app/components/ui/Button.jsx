import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", ...props }) => {
  const base =
    "px-4 py-2 rounded-lg font-medium transition focus:outline-none";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;