import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`rounded-xl bg-white dark:bg-gray-800 shadow-sm p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;