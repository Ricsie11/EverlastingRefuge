import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  CheckCircle,
  Star,
  QrCode,
  ClipboardCheck,
  Crown,
  User as UserIcon,
} from "lucide-react";

export default function UserOverview() {
  const user = JSON.parse(localStorage.getItem("user"));
  const today = new Date().toDateString();

  const [group, setGroup] = useState(null);
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState("");
  const [groupsList, setGroupsList] = useState([]);
  const [members, setMembers] = useState([]);
  const [attendanceCode, setAttendanceCode] = useState("");
  const [attendanceHistory] = useState([
    { date: "Sunday, March 1, 2026", time: "08:15 AM", status: "Verified" },
    { date: "Sunday, February 22, 2026", time: "08:10 AM", status: "Verified" },
    { date: "Sunday, February 15, 2026", time: "08:22 AM", status: "Verified" },
  ]);

  useEffect(() => {
    // Load members of the group
    const storedGroup = JSON.parse(localStorage.getItem("group"));
    setGroup(storedGroup);

    if (storedGroup) {
      const allMembers = JSON.parse(localStorage.getItem("groupMembers")) || {};
      let groupMembers = allMembers[storedGroup.name] || [];

      // Seed mock members if empty
      if (groupMembers.length <= 1) {
        const mocks = [
          { name: "Sister Deborah", email: "deb@test.com", leader: true },
          { name: "Brother Emmanuel", email: "emma@test.com", leader: false },
          { name: "Deacon James", email: "james@test.com", leader: false },
        ];
        groupMembers = [
          ...mocks,
          ...groupMembers.filter((m) => m.email !== user?.email),
        ];

        // Ensure user is in list
        if (!groupMembers.some((m) => m.email === user?.email)) {
          groupMembers.unshift({
            name: user?.name,
            email: user?.email,
            leader: false,
          });
        }

        allMembers[storedGroup.name] = groupMembers;
        localStorage.setItem("groupMembers", JSON.stringify(allMembers));
      }

      setMembers(groupMembers);
    }

    // Load available groups (created by admin)
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroupsList(storedGroups);

    // Handle attendance reset per day
    const attendanceData = JSON.parse(localStorage.getItem("attendance")) || {};
    const lastCheckInDate = localStorage.getItem("lastCheckInDate");

    if (lastCheckInDate !== today) {
      // Clear old attendance if it's a new day
      localStorage.removeItem("attendance");
      localStorage.setItem("lastCheckInDate", today);
      setCheckedIn(false);
      setCheckInTime("");
    } else if (attendanceData[today]) {
      setCheckedIn(true);
      setCheckInTime(attendanceData[today]);
    }
  }, [today, user?.email, user?.name]);

  const handleCheckIn = () => {
    if (!attendanceCode) return;
    const scanTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const attendance = JSON.parse(localStorage.getItem("attendance")) || {};
    attendance[today] = scanTime;
    localStorage.setItem("attendance", JSON.stringify(attendance));
    localStorage.setItem("lastCheckInDate", today);
    setCheckedIn(true);
    setCheckInTime(scanTime);
  };

  const handleJoinGroup = (groupName) => {
    const selectedGroup = groupsList.find((g) => g.name === groupName);
    if (selectedGroup) {
      setGroup(selectedGroup);
      localStorage.setItem("group", JSON.stringify(selectedGroup));

      const allMembers = JSON.parse(localStorage.getItem("groupMembers")) || {};
      if (!allMembers[groupName]) allMembers[groupName] = [];
      if (!allMembers[groupName].some((m) => m.email === user?.email)) {
        allMembers[groupName].push({
          name: user?.name,
          email: user?.email,
          leader: selectedGroup.leader || false,
        });
      }
      localStorage.setItem("groupMembers", JSON.stringify(allMembers));
      setMembers(allMembers[groupName]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white shadow-soft border border-slate-100 overflow-hidden"
      >
        {/* Header */}
        <div className="p-10 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-gold-dark" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold">
                  Member Dashboard
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold">
                Welcome, {user?.name || "Member"}!
              </h2>
              <p className="text-slate-300 font-light mt-2 max-w-md">
                Mark your Sunday attendance & manage your group.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 bg-background">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sunday Attendance Card */}
            <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-gold-dark" />
                </div>
                <h3 className="text-lg font-serif font-bold text-primary">
                  Sunday Attendance
                </h3>
              </div>

              <div className="min-h-[140px] flex flex-col justify-center">
                {checkedIn ? (
                  <div className="flex flex-col items-center justify-center text-center p-4 bg-green-50 rounded-xl border border-green-100 h-full">
                    <CheckCircle className="w-10 h-10 text-green-500 mb-2" />
                    <div>
                      <p className="font-bold text-green-800">
                        You're checked in!
                      </p>
                      <p className="text-xs text-green-600 mt-1 font-medium">
                        Checked in at {checkInTime}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-500 font-medium">
                      Enter today's service code to mark your attendance.
                    </p>
                    <div className="flex gap-3">
                      <div className="relative flex-1 group focus-within:ring-2 focus-within:ring-gold/30 rounded-xl transition-all">
                        <QrCode className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          placeholder="Attendance Code"
                          value={attendanceCode}
                          onChange={(e) =>
                            setAttendanceCode(e.target.value.toUpperCase())
                          }
                          className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-gold/30 focus:outline-none font-bold uppercase tracking-wider"
                        />
                      </div>
                      <button
                        onClick={handleCheckIn}
                        disabled={!attendanceCode}
                        className="h-12 px-6 bg-gold text-primary hover:bg-gold-dark rounded-xl font-bold shadow-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Check In
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Your Group Card */}
            <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-gold-dark" />
                </div>
                <h3 className="text-lg font-serif font-bold text-primary">
                  Your Group
                </h3>
              </div>

              {!group && groupsList.length > 0 ? (
                <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex-1">
                  <p className="text-sm font-medium text-slate-600 mb-3">
                    Join a fellowship group:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {groupsList.map((g) => (
                      <button
                        key={g.name}
                        onClick={() => handleJoinGroup(g.name)}
                        className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-opacity-90 transition shadow-sm"
                      >
                        {g.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col flex-grow">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                    <p className="text-sm font-bold text-primary">
                      {group?.name || "Not Assigned"}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Community Fellowship
                    </p>
                  </div>

                  <div className="flex-1 overflow-y-auto max-h-[160px] custom-scrollbar pr-2 space-y-2">
                    {members
                      .sort((a, b) => (b.leader ? 1 : 0) - (a.leader ? 1 : 0))
                      .map((m, idx) => {
                        const isCurrentUser = m.email === user?.email;
                        return (
                          <div
                            key={idx}
                            className={`flex justify-between items-center p-3 rounded-xl transition-all border ${
                              m.leader
                                ? "bg-gold/10 border-gold/30 shadow-sm"
                                : "bg-white border-slate-100 hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {m.leader ? (
                                <Crown className="w-4 h-4 text-gold-dark" />
                              ) : (
                                <UserIcon className="w-4 h-4 text-slate-400" />
                              )}
                              <span
                                className={`text-sm font-medium ${m.leader ? "text-primary font-bold" : "text-slate-700"}`}
                              >
                                {m.name}{" "}
                                {isCurrentUser && (
                                  <span className="text-slate-400 font-normal italic ml-1">
                                    (You)
                                  </span>
                                )}
                              </span>
                            </div>
                            {m.leader && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-gold-dark border border-gold/30">
                                Leader
                              </span>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>

            {/* Recent Attendance */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-soft border border-slate-100 p-6">
              <h3 className="text-lg font-serif font-bold text-primary mb-6">
                Recent Attendance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {attendanceHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-primary">
                        {item.date}
                      </p>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        {item.time} • {item.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
