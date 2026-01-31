import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";

export default function SuperuserDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8"
    >
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Shield className="w-6 h-6" />
        Superuser Dashboard
      </h1>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-xl border p-6 shadow-sm"
        >
          <Users className="w-8 h-8 mb-2 text-purple-600" />
          <p className="font-semibold">User & Role Management</p>
          <p className="text-sm text-gray-500">
            Control admins and permissions
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}