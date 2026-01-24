import { useEffect, useState } from "react";
import { api } from "../../services/api";
import StatCard from "../../components/StatCard";
import { Users, Shield, Layers, Activity } from "lucide-react";

const SuperUserDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/superuser/stats/")
      .then(res => setStats(res.data))
      .catch(() => {});
  }, []);

  if (!stats) return null;

  return (
    <div className="grid gap-6 md:grid-cols-4">
      <StatCard icon={Users} label="Users" value={stats.users} />
      <StatCard icon={Shield} label="Admins" value={stats.admins} />
      <StatCard icon={Layers} label="Groups" value={stats.groups} />
      <StatCard icon={Activity} label="Total Scans" value={stats.scans} />
    </div>
  );
};

export default SuperUserDashboard;