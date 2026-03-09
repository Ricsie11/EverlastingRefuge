import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  noPadding = false,
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -5, shadow: "0 25px 50px -12px rgba(30, 58, 138, 0.08)" }
          : {}
      }
      className={`
        bg-white dark:bg-slate-900 
        rounded-[40px] 
        border border-slate-100 dark:border-slate-800 
        shadow-xl shadow-blue-900/5 
        ${noPadding ? "" : "p-8 md:p-10"} 
        ${className} 
        transition-all duration-300
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;
