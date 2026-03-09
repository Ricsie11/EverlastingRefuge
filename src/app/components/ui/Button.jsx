import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "h-14 px-8 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-primary shadow-xl shadow-blue-900/10",
    gold: "bg-gold text-white hover:bg-slate-900 shadow-xl shadow-gold-900/10",
    outline:
      "bg-transparent border-2 border-slate-100 text-slate-600 hover:border-gold hover:text-gold",
    danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-100",
    ghost:
      "bg-transparent text-slate-400 hover:text-slate-900 hover:bg-slate-50",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
