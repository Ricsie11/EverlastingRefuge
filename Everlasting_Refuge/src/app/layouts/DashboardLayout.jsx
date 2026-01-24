import { Outlet } from "react-router-dom";
import { motion } from "framer-motion"

function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-4">Sidebar</aside>

      <motion.main
        className="flex-1 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
    </div>
  );
}

export default DashboardLayout;
