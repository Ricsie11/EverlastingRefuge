import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const { login } = useAuth(); // use hook, not AuthContext directly
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(form.email, form.password);
      // optionally redirect after login
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-24 space-y-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="email"
        placeholder="your@email.com"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="password"
        placeholder="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className={`w-full py-2 rounded text-white ${loading ? "bg-gray-500" : "bg-black"}`}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default Login;
