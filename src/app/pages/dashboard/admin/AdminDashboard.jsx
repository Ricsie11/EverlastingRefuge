import { useState, useEffect } from "react";
import {
  useNavigate,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";
import DashboardLayout from "@/app/components/layout/DashboardLayout";
import AdminOverview from "./AdminOverview";
import AdminQR from "./AdminQR";
import EventsManager from "./EventsManager";
import AdminUsersAndGroups from "./AdminUsersAndGroups";
import AdminMessages from "./AdminMessages";
import {
  BarChart,
  QrCode,
  Users,
  User as UserIcon,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Mail,
} from "lucide-react";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (user.role !== "ADMIN") {
      if (user.role === "SUPERUSER") navigate("/dashboard/superuser");
      else navigate("/dashboard/user");
    }
  }, [user, navigate]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  if (!user || user.role !== "ADMIN") return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const adminTabs = [
    {
      id: "overview",
      label: "Overview",
      icon: BarChart,
      path: "/dashboard/admin",
    },
    {
      id: "attendance",
      label: "Attendance",
      icon: QrCode,
      path: "/dashboard/admin/attendance",
    },
    {
      id: "groups",
      label: "Groups",
      icon: Users,
      path: "/dashboard/admin/groups",
    },
    {
      id: "users",
      label: "Users",
      icon: UserIcon,
      path: "/dashboard/admin/users",
    },
    {
      id: "events",
      label: "Events",
      icon: Calendar,
      path: "/dashboard/admin/events",
    },
    {
      id: "messages",
      label: "Messages",
      icon: Mail,
      path: "/dashboard/admin/messages",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex overflow-hidden relative">
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Admin Internal Sidebar */}
      <aside
        className={`bg-primary flex flex-col transition-all duration-300 fixed lg:static inset-y-0 left-0 z-50 
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} 
        ${isSidebarCollapsed ? "w-20" : "w-64"} shrink-0 shadow-2xl lg:shadow-none`}
      >
        <div className="p-6 flex items-center justify-between">
          {!isSidebarCollapsed && (
            <span className="text-white font-serif font-bold text-xl truncate">
              Parish Admin
            </span>
          )}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={`hidden lg:flex p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition ${isSidebarCollapsed ? "mx-auto" : ""}`}
          >
            {isSidebarCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg bg-white/10 text-white"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {adminTabs.map((tab) => {
            const isActive =
              tab.path === "/dashboard/admin"
                ? location.pathname === "/dashboard/admin" ||
                  location.pathname === "/dashboard/admin/"
                : location.pathname.startsWith(tab.path);

            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-blue-900/60 text-gold shadow-sm"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                } ${isSidebarCollapsed ? "justify-center" : ""}`}
              >
                <tab.icon size={20} className={isActive ? "text-gold" : ""} />
                {!isSidebarCollapsed && (
                  <span className="font-bold text-sm tracking-wide">
                    {tab.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            to="/dashboard/user"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-slate-300 hover:bg-white/5 hover:text-white ${isSidebarCollapsed ? "justify-center" : ""}`}
          >
            <ChevronLeft size={20} />
            {!isSidebarCollapsed && (
              <span className="font-bold text-sm truncate uppercase tracking-widest text-[10px]">
                Back to Member
              </span>
            )}
          </Link>
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-red-400 hover:bg-red-500/10 hover:text-red-300 ${isSidebarCollapsed ? "justify-center" : ""}`}
          >
            <LogOut size={20} />
            {!isSidebarCollapsed && (
              <span className="font-bold text-sm uppercase tracking-widest text-[10px]">
                Sign Out
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Admin Content Area */}
      <main className="flex-1 overflow-y-auto relative custom-scrollbar bg-background">
        <div className="lg:hidden p-4 border-b bg-white flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-lg bg-slate-100 text-primary"
          >
            <BarChart size={20} className="rotate-90" />
          </button>
          <span className="font-serif font-bold text-primary">
            Parish Admin
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <Routes>
              <Route index element={<AdminOverview />} />
              <Route path="attendance" element={<AdminQR />} />
              <Route
                path="groups"
                element={<AdminUsersAndGroups initialTab="groups" />}
              />
              <Route
                path="users"
                element={<AdminUsersAndGroups initialTab="users" />}
              />
              <Route path="events" element={<EventsManager />} />
              <Route path="messages" element={<AdminMessages />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
