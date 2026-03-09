import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  LogOut,
  User,
  LayoutDashboard,
  QrCode,
  Calendar,
  Menu,
  X,
  Bell,
  Church,
  ChevronRight,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const sidebarItems = [
    {
      label: "My Sanctuary",
      to: "/dashboard/user",
      icon: <LayoutDashboard className="w-5 h-5" />,
      roles: ["USER"],
    },
    {
      label: "System Overview",
      to: "/dashboard/superuser",
      icon: <Shield className="w-5 h-5" />,
      roles: ["SUPERUSER"],
    },
    {
      label: "Parish Overview",
      to: "/dashboard/admin",
      icon: <LayoutDashboard className="w-5 h-5" />,
      roles: ["ADMIN"],
    },
    {
      label: "Attendance QR",
      to: "/dashboard/admin/qr",
      icon: <QrCode className="w-5 h-5" />,
      roles: ["ADMIN", "SUPERUSER"],
    },
    {
      label: "Events Manager",
      to: "/dashboard/events",
      icon: <Calendar className="w-5 h-5" />,
      roles: ["ADMIN", "SUPERUSER"],
    },
  ];

  const activeItem =
    sidebarItems.find((item) => location.pathname === item.to) ||
    sidebarItems[0];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-slate-800/50 shadow-[0_8px_32px_rgba(30,58,138,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Logo Area */}
      <div className="p-8 pb-12">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-gold group-hover:rotate-12 transition-transform shadow-lg shadow-blue-900/10">
            <Church className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-slate-900 dark:text-white leading-none">
              Refuge
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mt-1">
              Mega Parish
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {sidebarItems
          .filter((item) => item.roles.includes(user?.role))
          .map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-5 py-4 rounded-[20px] transition-all duration-300 group
                  ${
                    active
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 dark:shadow-white/10"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`${active ? "text-gold dark:text-gold" : "text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"} transition-colors`}
                  >
                    {item.icon}
                  </div>
                  <span className="font-bold text-sm tracking-tight">
                    {item.label}
                  </span>
                </div>
                {active && <ChevronRight className="w-4 h-4 text-gold" />}
              </Link>
            );
          })}
      </nav>

      {/* User Profile Area */}
      <div className="p-6 border-t border-slate-50 dark:border-slate-800/50">
        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-[28px] p-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 border border-slate-100 dark:border-slate-700 shadow-sm">
              <User className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {user?.name}
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                {user?.role}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 px-4 py-4 rounded-2xl text-red-500 font-bold text-xs uppercase tracking-widest hover:bg-red-50 dark:hover:bg-red-900/10 transition-all border border-transparent hover:border-red-100"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F0F4F8] dark:bg-slate-950 flex overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 h-screen shrink-0 sticky top-0 p-4 pb-4 pl-4 pr-1">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-80 lg:hidden p-4"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col min-w-0 h-screen p-4 pl-1">
        {/* Top bar for mobile and desktop context */}
        <header className="h-[76px] bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-slate-800/50 shadow-sm sticky top-0 z-50 px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="lg:hidden flex items-center group">
              <div className="w-10 h-10 bg-primary dark:bg-slate-900 rounded-xl flex items-center justify-center text-gold group-hover:rotate-12 transition-transform shadow-sm">
                <Church className="w-6 h-6" />
              </div>
            </Link>
            <div className="flex flex-col">
              <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white capitalize flex items-center gap-2">
                {activeItem?.label}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-gold transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800" />
            </button>
            <div className="hidden sm:block h-10 w-px bg-slate-100 dark:bg-slate-800 mx-1" />

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-300"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="hidden sm:flex items-center gap-3 p-1.5 pr-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="w-8 h-8 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {user?.name}
              </span>
            </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar relative z-0">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 md:p-8 lg:p-12"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
