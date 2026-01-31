import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

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

      if (user.role === "SUPERUSER") navigate("/dashboard/superuser");
      else if (user.role === "ADMIN") navigate("/dashboard/admin");
      else navigate("/dashboard/user");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      {/* Animated card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-2xl py-8 px-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="w-15 h-15 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
            <User className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
          Sign in to access your account
        </p>

        {/* Error */}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 py-5">
          <div className="space-y-1">
            <label className="text-gray-900 dark:text-gray-100 font-bold">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-300" />
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg py-2.5 pl-10 pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-gray-900 dark:text-gray-100 font-bold">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-300" />
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg py-2.5 pl-10 pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black dark:bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-blue-700 transition-colors text-sm"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}