import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const Register = () => {
  const { register } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await register(form); // your API call in useAuth
      // optionally redirect to login or dashboard
    } catch (err) {
      setError("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      onSubmit={submit}
      className="max-w-md mx-auto mt-24 space-y-4 border p-6 rounded shadow-lg"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <User className="w-6 h-6" /> Register
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-500" : "bg-black"
        }`}
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </motion.form>
  );
};

export default Register;