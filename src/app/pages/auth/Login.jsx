import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Church } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await login(form.email, form.password);
      // Ensure absolute paths or correct relative paths are used
      if (user.role === "SUPERUSER") navigate("/dashboard/superuser");
      else if (user.role === "ADMIN") navigate("/dashboard/admin");
      else navigate("/dashboard/user");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[480px] relative z-10"
      >
        <div className="bg-white rounded-[40px] shadow-2xl shadow-black/20 border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-10">
              <div className="w-20 h-20 bg-primary rounded-[28px] flex items-center justify-center rotate-3 shadow-xl">
                <Church className="h-10 w-10 text-gold" />
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-3 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-slate-500 font-light">
                Sign in to your sanctuary portal
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl text-sm mb-6 text-center font-medium"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
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
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-bold text-primary hover:text-gold transition-colors uppercase tracking-widest"
                  >
                    Forgot?
                  </a>
                </div>
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
                    Continue to Dashboard
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-10 pt-10 border-t border-slate-50 text-center">
              <p className="text-slate-500 font-medium">
                No account? Contact your administrator.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 px-8 py-6 text-center">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
              Secured by Sanctuary Guardian Protocol
            </p>
          </div>
        </div>

        {/* Demo Credentials Helper */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 overflow-x-auto pb-4">
          {["USER", "ADMIN", "SUPERUSER"].map((role) => (
            <div
              key={role}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-[10px] font-bold text-white shadow-sm"
            >
              <span className="text-gold">{role}:</span> {role.toLowerCase()}
              @test.com / password123
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
