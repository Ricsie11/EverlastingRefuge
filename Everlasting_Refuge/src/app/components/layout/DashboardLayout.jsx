import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LayoutDashboard,
  QrCode,
  Calendar,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-800 border-r">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="flex justify-end p-4">
              <X
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-4 border-b bg-white dark:bg-gray-800">
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>

          <h1 className="font-semibold">Dashboard</h1>

          <button className="flex items-center gap-2 text-sm">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

function SidebarContent({ onNavigate }) {
  return (
    <nav className="flex-1 px-4 py-6 space-y-2">
      <NavItem to="#" icon={<LayoutDashboard />} label="Overview" onClick={onNavigate} />
      <NavItem to="/dashboard/admin/qr" icon={<QrCode />} label="Attendance QR" />
      <NavItem to="#" icon={<Calendar />} label="Events" onClick={onNavigate} />
    </nav>
  );
}

function NavItem({ to, icon, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
      {label}
    </Link>
  );
}