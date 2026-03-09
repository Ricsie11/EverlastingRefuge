import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Trash2, CheckCircle, Clock, User } from "lucide-react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages =
      JSON.parse(localStorage.getItem("contact_messages")) || [];
    setMessages(storedMessages);
  }, []);

  const markAsRead = (id) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, status: "read" } : msg,
    );
    setMessages(updatedMessages);
    localStorage.setItem("contact_messages", JSON.stringify(updatedMessages));
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("contact_messages", JSON.stringify(updatedMessages));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">
            Contact Messages
          </h1>
          <p className="text-slate-500 font-light">
            Review and respond to inquiries from the "Get in Touch" form.
          </p>
        </div>
        <div className="bg-gold/10 px-4 py-2 rounded-full border border-gold/20 text-gold-dark font-bold text-xs uppercase tracking-widest">
          {messages.filter((m) => m.status === "unread").length} New Messages
        </div>
      </div>

      <div className="space-y-6">
        {messages.length === 0 ? (
          <div className="bg-white rounded-[40px] border border-slate-100 p-20 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-2">
              No messages yet
            </h3>
            <p className="text-slate-400 font-light">
              When someone contacts the parish, their message will appear here.
            </p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-white rounded-[32px] border ${msg.status === "unread" ? "border-gold/30 shadow-gold/5" : "border-slate-100"} p-8 shadow-soft transition-all hover:shadow-xl`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg ${msg.status === "unread" ? "bg-gold/10 text-gold-dark" : "bg-slate-100 text-slate-400"}`}
                    >
                      <User size={18} />
                    </div>
                    <span className="font-bold text-primary">{msg.name}</span>
                    <span className="text-slate-300 mx-2 text-xs">•</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1.5 font-medium">
                      <Clock size={12} />
                      {new Date(msg.date).toLocaleString()}
                    </span>
                    {msg.status === "unread" && (
                      <span className="ml-auto px-2 py-0.5 rounded text-[10px] bg-gold text-primary font-bold uppercase tracking-widest">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light bg-slate-50/50 p-6 rounded-2xl border border-slate-100/50">
                    "{msg.message}"
                  </p>
                </div>
                <div className="flex md:flex-col gap-3 justify-center">
                  <button
                    onClick={() => markAsRead(msg.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                      msg.status === "read"
                        ? "bg-slate-100 text-slate-400 cursor-default"
                        : "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white border border-green-100"
                    }`}
                    disabled={msg.status === "read"}
                  >
                    <CheckCircle size={16} />
                    {msg.status === "read" ? "Read" : "Mark Read"}
                  </button>
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border border-red-100 font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
