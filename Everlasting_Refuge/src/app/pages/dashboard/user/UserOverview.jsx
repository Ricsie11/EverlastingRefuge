import { motion } from "framer-motion";
import { User, QrCode } from "lucide-react";

export default function UserDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8"
    >
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <User className="w-6 h-6" />
        User Dashboard
      </h1>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-xl border p-6 shadow-sm"
        >
          <QrCode className="w-8 h-8 mb-2 text-blue-600" />
          <p className="font-semibold">Scan Attendance QR</p>
          <p className="text-sm text-gray-500">
            Scan QR to mark church attendance
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}