import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  User,
  Mail,
  Lock,
  Church,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await register(form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please try again or contact support.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[520px] relative z-10"
      >
        <div className="bg-white rounded-[40px] shadow-2xl shadow-black/20 border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-[28px] flex items-center justify-center rotate-3 shadow-xl">
                <ShieldCheck className="w-10 h-10 text-gold" />
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-3 tracking-tight">
                Join our Family
              </h2>
              <p className="text-slate-500 font-light">
                Become a registered member of Everlasting Refuge
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-5 py-4 rounded-2xl text-sm mb-8 text-center font-medium">
                {error}
              </div>
            )}

            <form onSubmit={submit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-gold transition-colors" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-14 pr-5 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-gold/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-gold transition-colors" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-14 pr-5 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-gold/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-gold transition-colors" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                    className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-14 pr-5 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-gold/20 transition-all font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-16 bg-gold text-primary hover:bg-gold-dark rounded-2xl font-bold shadow-gold transition-all flex items-center justify-center gap-3 group px-4"
              >
                {loading ? (
                  <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Create Membership
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-10 pt-10 border-t border-slate-50 text-center">
              <p className="text-slate-500 font-light">
                Already a member?{" "}
                <Link
                  to="/login"
                  className="text-primary font-bold hover:text-gold-dark transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          <div className="bg-slate-50 px-8 py-5 flex items-center justify-center gap-2">
            <Church className="w-4 h-4 text-slate-300" />
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
              Everlasting Refuge Mega Parish
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
