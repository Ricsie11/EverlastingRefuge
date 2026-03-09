import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { X, Home, Info, Calendar, Church, Heart, LogIn } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
  const links = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <Info className="w-5 h-5" /> },
    {
      name: "Services",
      path: "/services",
      icon: <Church className="w-5 h-5" />,
    },
    { name: "Events", path: "/events", icon: <Calendar className="w-5 h-5" /> },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "150%" }}
            animate={{ x: 0 }}
            exit={{ x: "150%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-4 right-4 z-[70] w-full max-w-[calc(100%-2rem)] sm:max-w-sm bg-white/70 dark:bg-slate-900/70 backdrop-blur-3xl shadow-[0_8px_32px_rgba(30,58,138,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/50 dark:border-slate-800/50 rounded-[40px] lg:hidden flex flex-col overflow-hidden"
          >
            <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
              <span className="font-serif font-bold text-primary dark:text-white">
                Menu
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 text-slate-500 hover:bg-slate-200/50 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-5 py-4 rounded-[20px] transition-all duration-300 ${
                      isActive
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 dark:shadow-white/10"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-white/60 dark:hover:text-white dark:hover:bg-slate-800/60"
                    }`
                  }
                >
                  {link.icon}
                  <span className="font-bold uppercase tracking-widest text-xs">
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800/50 space-y-4">
              <Link
                to="/login"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 font-bold uppercase tracking-widest text-xs transition-all shadow-sm"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                to="/give"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl gold-gradient text-white font-bold uppercase tracking-widest text-xs shadow-lg shadow-gold-500/20"
              >
                <Heart className="w-4 h-4" />
                Give
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
