import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  QrCode,
  Users,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Mail,
} from "lucide-react";

export default function AdminOverview() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const [attendance, setAttendance] = useState(
    JSON.parse(localStorage.getItem("attendance")) || {},
  );

  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("groups")) || [
      { name: "Youth Fellowship" },
      { name: "Men Fellowship" },
      { name: "Women Fellowship" },
    ],
  );

  const stats = [
    {
      label: "Today's Attendance",
      value: Object.keys(attendance).length,
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      color: "bg-green-50/50",
    },
    {
      label: "Active Groups",
      value: groups.length,
      icon: <Users className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-50/50",
    },
    {
      label: "Active Events",
      value: 4,
      icon: <Calendar className="w-6 h-6 text-gold-dark" />,
      color: "bg-gold/10",
    },
  ];

  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("contact_messages")) || [],
  );

  const recentMessage = messages[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 p-10 bg-primary rounded-[40px] text-white relative overflow-hidden shadow-soft">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gold/20 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-gold" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold">
              Pastoral Oversight Portal
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold mb-2">
            Parish Command Center
          </h1>
          <p className="text-slate-300 font-light max-w-xl">
            Managing the growth and spiritual engagement of the Everlasting
            Refuge Mega Parish community.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-gold border-gold/10">
            Active Session: {today}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-soft relative overflow-hidden group"
          >
            <div
              className={`absolute top-0 right-0 w-24 h-24 ${stat.color} opacity-40 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2`}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 ${stat.color} rounded-2xl`}>
                  {stat.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  {stat.label}
                </span>
              </div>
              <div className="text-4xl font-bold text-primary leading-none">
                {stat.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Activity Full Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[40px] border border-slate-100 shadow-soft p-10">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">
              Recent Activity Feed
            </h3>

            <div className="space-y-6">
              {recentMessage && (
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gold/5 border border-gold/10">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-primary">
                        New Message: {recentMessage.name}
                      </p>
                      <span className="px-2 py-0.5 rounded text-[8px] bg-gold text-primary font-bold uppercase tracking-[0.2em]">
                        New
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1 italic">
                      "{recentMessage.message}"
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-3">
                      Recent Inclusion
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">
                    New Member Registered
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Brother John was registered and added to the Men Fellowship.
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-3">
                    2 Hours Ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500 mt-1">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">
                    Sunday Attendance Finalized - {today}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Total recorded: {Object.keys(attendance).length} members.
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-3">
                    8 Hours Ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden shadow-soft">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <TrendingUp className="w-8 h-8 text-gold mb-6" />
              <h4 className="text-xl font-serif font-bold mb-2">
                System Status
              </h4>
              <p className="text-slate-300 text-sm font-light mb-8 leading-relaxed">
                All external portals and group sync tools are functioning at
                full capacity.
              </p>
              <div className="w-full flex justify-between text-xs font-bold uppercase tracking-widest text-gold pb-2 border-b border-white/10 mb-4">
                <span>CPU Check</span>
                <span className="text-green-400">Stable</span>
              </div>
              <div className="w-full flex justify-between text-xs font-bold uppercase tracking-widest text-gold pb-2 mb-4">
                <span>DB Latency</span>
                <span className="text-green-400">12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
