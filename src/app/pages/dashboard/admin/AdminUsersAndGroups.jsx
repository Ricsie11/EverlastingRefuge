import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Plus,
  ShieldCheck,
  Crown,
  User as UserIcon,
  UserCheck,
  UserPlus,
} from "lucide-react";

export default function AdminGroupsAndUsersTab({ initialTab = "groups" }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("groups")) || [
      {
        name: "Youth Fellowship",
        description: "Young adults ministry",
        members: [],
      },
      { name: "Men Fellowship", description: "Men's ministry", members: [] },
      {
        name: "Women Fellowship",
        description: "Women's ministry",
        members: [],
      },
    ],
  );
  const [showNewGroupForm, setShowNewGroupForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDesc, setNewGroupDesc] = useState("");

  const [expandedGroup, setExpandedGroup] = useState(null);

  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    group: "",
    role: "USER",
  });

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    // Collect all unique members from groups and standalone creations
    let membersMap = JSON.parse(localStorage.getItem("groupMembers")) || {};
    let usersList = JSON.parse(localStorage.getItem("createdUsers")) || [];

    let combined = [...usersList];

    Object.keys(membersMap).forEach((groupName) => {
      membersMap[groupName].forEach((member) => {
        if (!combined.some((u) => u.email === member.email)) {
          combined.push({ ...member, group: groupName });
        }
      });
    });
    setAllUsers(combined);
  }, [groups]);

  // Handle group creation
  const handleCreateGroup = () => {
    if (!newGroupName) return;
    const newGroup = {
      name: newGroupName,
      description: newGroupDesc,
      members: [],
    };
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
    setNewGroupName("");
    setNewGroupDesc("");
    setShowNewGroupForm(false);
  };

  const handleDeleteGroup = (groupName) => {
    if (window.confirm(`Are you sure you want to delete ${groupName}?`)) {
      const updated = groups.filter((g) => g.name !== groupName);
      setGroups(updated);
      localStorage.setItem("groups", JSON.stringify(updated));
    }
  };

  // Handle user creation
  const handleCreateUser = () => {
    if (!newUser.name || !newUser.password) return;

    const localUsers = JSON.parse(localStorage.getItem("createdUsers")) || [];
    const newAccount = { ...newUser, role: newUser.role || "USER" };
    localUsers.push(newAccount);
    localStorage.setItem("createdUsers", JSON.stringify(localUsers));

    if (newUser.group) {
      const allMembers = JSON.parse(localStorage.getItem("groupMembers")) || {};
      if (!allMembers[newUser.group]) allMembers[newUser.group] = [];
      allMembers[newUser.group].push({
        name: newUser.name,
        email: newUser.email,
        leader: false,
      });
      localStorage.setItem("groupMembers", JSON.stringify(allMembers));
    }

    setAllUsers([...allUsers, newAccount]);
    setNewUser({ name: "", email: "", password: "", group: "", role: "USER" });
    setShowNewUserForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Sub Tabs */}
      <div className="flex bg-slate-100 p-1 rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab("groups")}
          className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${activeTab === "groups" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-primary"}`}
        >
          Groups
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${activeTab === "users" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-primary"}`}
        >
          Users
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "groups" && (
          <motion.div
            key="groups"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif font-bold text-primary">
                Manage Groups
              </h3>
              <button
                onClick={() => setShowNewGroupForm(!showNewGroupForm)}
                className="h-10 px-4 bg-gold text-primary rounded-xl font-bold text-sm hover:bg-gold-dark transition shadow-sm flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> New Group
              </button>
            </div>

            {showNewGroupForm && (
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6 flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 space-y-2 w-full">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Group Name
                  </label>
                  <input
                    type="text"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                    className="w-full h-12 rounded-xl border-slate-200 px-4 focus:ring-2 focus:ring-gold/30"
                  />
                </div>
                <div className="flex-[2] space-y-2 w-full">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Description
                  </label>
                  <input
                    type="text"
                    value={newGroupDesc}
                    onChange={(e) => setNewGroupDesc(e.target.value)}
                    className="w-full h-12 rounded-xl border-slate-200 px-4 focus:ring-2 focus:ring-gold/30"
                  />
                </div>
                <button
                  onClick={handleCreateGroup}
                  className="h-12 px-6 bg-primary text-white rounded-xl font-bold hover:bg-opacity-90"
                >
                  Save Group
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group, idx) => (
                <div
                  key={group.name}
                  className="bg-white rounded-2xl shadow-soft border border-slate-100 p-6 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-gold-dark" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      ID: {1000 + idx}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-1">
                    {group.name}
                  </h4>
                  <p className="text-sm text-slate-500 mb-4">
                    {group.description || "Fellowship Group"}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() =>
                        setExpandedGroup(
                          expandedGroup === group.name ? null : group.name,
                        )
                      }
                      className="text-xs font-bold text-primary hover:text-gold transition"
                    >
                      {expandedGroup === group.name
                        ? "Hide Members"
                        : "View Members"}
                    </button>
                    <button
                      onClick={() => handleDeleteGroup(group.name)}
                      className="text-xs font-bold text-red-500 hover:text-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>

                  {/* Expanded state rendering could go here, simplified for mock */}
                  {expandedGroup === group.name && (
                    <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-slate-500 italic">
                      Members expansion mock...
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "users" && (
          <motion.div
            key="users"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif font-bold text-primary">
                Manage Users
              </h3>
              <button
                onClick={() => setShowNewUserForm(!showNewUserForm)}
                className="h-10 px-4 bg-gold text-primary rounded-xl font-bold text-sm hover:bg-gold-dark transition shadow-sm flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" /> Create User
              </button>
            </div>

            {showNewUserForm && (
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={newUser.name}
                      onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                      }
                      className="w-full h-12 rounded-xl border-slate-200 px-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newUser.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                      className="w-full h-12 rounded-xl border-slate-200 px-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Password
                    </label>
                    <input
                      type="text"
                      value={newUser.password}
                      onChange={(e) =>
                        setNewUser({ ...newUser, password: e.target.value })
                      }
                      className="w-full h-12 rounded-xl border-slate-200 px-4"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Group Assignment
                    </label>
                    <select
                      value={newUser.group}
                      onChange={(e) =>
                        setNewUser({ ...newUser, group: e.target.value })
                      }
                      className="w-full h-12 rounded-xl border-slate-200 px-4 bg-white"
                    >
                      <option value="">None</option>
                      {groups.map((g) => (
                        <option key={g.name} value={g.name}>
                          {g.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Role
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setNewUser({ ...newUser, role: "USER" })}
                        className={`h-12 flex-1 rounded-xl font-bold text-sm transition border ${newUser.role === "USER" ? "bg-gold/10 text-gold-dark border-gold/30" : "bg-white text-slate-500 border-slate-200"}`}
                      >
                        USER
                      </button>
                      <button
                        onClick={() =>
                          setNewUser({ ...newUser, role: "ADMIN" })
                        }
                        className={`h-12 flex-1 rounded-xl font-bold text-sm transition border ${newUser.role === "ADMIN" ? "bg-gold/10 text-gold-dark border-gold/30" : "bg-white text-slate-500 border-slate-200"}`}
                      >
                        ADMIN
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleCreateUser}
                    className="h-12 px-8 bg-primary text-white rounded-xl font-bold hover:bg-opacity-90"
                  >
                    Register Member
                  </button>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Group
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {allUsers.map((u, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                            {u.name?.charAt(0) || "U"}
                          </div>
                          <span className="font-bold text-primary text-sm">
                            {u.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {u.email || "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {u.group || "None"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${u.role === "ADMIN" ? "bg-primary/10 text-primary" : "bg-green-50 text-green-600"}`}
                        >
                          {u.role || "USER"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
