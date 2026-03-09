import { motion } from "framer-motion";
import {
  Shield,
  Users,
  UserCog,
  QrCode,
  CalendarCheck,
  Key,
  Settings,
  Activity,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Plus,
} from "lucide-react";

export default function SuperuserOverview() {
  const systemStats = [
    {
      label: "Total Members",
      value: "1.2k",
      trend: "+14%",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      label: "Ordained Admins",
      value: "24",
      trend: "+2",
      icon: <UserCog className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50",
    },
    {
      label: "Total Attendance",
      value: "8.4k",
      trend: "+8%",
      icon: <CalendarCheck className="w-6 h-6 text-green-600" />,
      color: "bg-green-50",
    },
    {
      label: "Network Parishes",
      value: "12",
      trend: "Stable",
      icon: <QrCode className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-50",
    },
  ];

  const superActions = [
    {
      title: "Member Directory",
      desc: "Manage roles and permissions",
      icon: <Users />,
      color: "bg-primary",
    },
    {
      title: "Parish Security",
      desc: "System firewalls and logs",
      icon: <Shield />,
      color: "bg-slate-900",
    },
    {
      title: "Analytics",
      desc: "Church growth intelligence",
      icon: <TrendingUp />,
      color: "bg-gold",
    },
    {
      title: "System Config",
      desc: "Global parish settings",
      icon: <Settings />,
      color: "bg-slate-800",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
              Global Control Center
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-900">
            System Oversight
          </h1>
          <p className="text-slate-500 font-light mt-1">
            Global administration and church intelligence dashboard.
          </p>
        </div>

        <button className="px-6 py-3 bg-red-50 text-red-600 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 border border-red-100 hover:bg-red-100 transition-all">
          <AlertCircle className="w-4 h-4" />
          System Lockdown
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {systemStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-blue-900/5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2.5 ${stat.color} rounded-xl`}>
                {stat.icon}
              </div>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                {stat.trend}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">
              {stat.label}
            </p>
            <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Admin Management Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-blue-900/5 p-10">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Registered Admins
              </h3>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full border border-gold/20">
                <Shield className="w-3 h-3" />
                Authorized Leaders
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "Pastor John Ochieng",
                  parish: "Asokoro Mega Parish",
                  status: "Active",
                },
                {
                  name: "Deaconess Sarah",
                  parish: "Maitama Extension",
                  status: "Offline",
                },
                {
                  name: "Evangelist Mark",
                  parish: "Central Command",
                  status: "Active",
                },
              ].map((admin, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-[30px] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between group hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-gold font-bold">
                      {admin.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        {admin.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-light">
                        {admin.parish}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        admin.status === "Active"
                          ? "bg-green-50 text-green-500"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${admin.status === "Active" ? "bg-green-500" : "bg-slate-400"}`}
                      />
                      {admin.status}
                    </div>
                    <button className="p-2 text-slate-300 hover:text-gold transition-colors">
                      <Settings className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 uppercase tracking-widest text-[10px]">
              <Plus className="w-4 h-4" />
              Appoint New Admin
            </button>
          </div>
        </div>

        {/* Sidebar: System Logs */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <Activity className="w-8 h-8 text-gold mb-6" />
            <h3 className="text-2xl font-serif font-bold mb-4">
              Real-time Pulse
            </h3>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((log) => (
                <div
                  key={log}
                  className="flex gap-4 border-l-2 border-slate-800 pl-4 py-1"
                >
                  <div>
                    <p className="text-xs font-bold text-blue-100">
                      Admin Login
                    </p>
                    <p className="text-[10px] text-slate-500 font-light mt-0.5">
                      Asokoro Parish • 2m ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-widest transition-all">
              Download Global Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
