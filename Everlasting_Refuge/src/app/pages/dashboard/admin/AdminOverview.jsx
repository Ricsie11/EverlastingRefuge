import { motion } from "framer-motion";
import { Users, Calendar, QrCode } from "lucide-react";

export default function AdminOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Users className="w-6 h-6" />
        Admin Dashboard
      </h1>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <DashboardCard
          icon={<QrCode />}
          title="Generate QR"
          desc="Create attendance QR codes"
        />
        <DashboardCard
          icon={<Calendar />}
          title="Manage Events"
          desc="Upload and manage church events"
        />
        <DashboardCard
          icon={<Users />}
          title="Attendance"
          desc="View attendance reports"
        />
      </div>
    </motion.div>
  );
}

function DashboardCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-xl border p-6 shadow-sm bg-white dark:bg-gray-800"
    >
      <div className="mb-2 text-blue-600">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}