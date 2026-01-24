import { useEffect, useState } from "react";
import { Users, Layers, QrCode, Activity } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "../../components/StatCard";
import { api } from "../../services/api";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/stats/")
      .then(res => setStats(res.data))
      .catch(() => {});
  }, []);

  if (!stats) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10  }}
      animate={{ opacity: 1, y: 0  }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6"
    >
      <StatCard icon={Users} label="Users" value={stats.users} />
      <StatCard icon={Layers} label="Groups" value={stats.groups} />
      <StatCard icon={QrCode} label="Active QRs" value={stats.active_qr} />
      <StatCard icon={Activity} label="Scans" value={stats.scans} />
    </motion.div>
  );
};

export default AdminDashboard;