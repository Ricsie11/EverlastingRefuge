import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { QrCode } from "lucide-react";
import { motion } from "framer-motion";
import { api } from "../../../api/axios";

const ScanQR = () => {
  const { user } = useAuth();
  const [scanCode, setScanCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScan = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await api.post("/attendance/scan/", {
        token: scanCode,
      });
      setMessage(res.data.detail || "Scan successful!");
    } catch (err) {
      setMessage(
        err.response?.data?.detail || "Scan failed. Try again or check QR code."
      );
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-24 p-6 border rounded shadow-lg"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <QrCode className="w-6 h-6" /> Scan QR Code
      </h2>
      <p className="mb-4">
        Hello, <strong>{user?.email || "Member"}</strong>. Enter the QR code below:
      </p>

      <form onSubmit={handleScan} className="space-y-4">
        <input
          type="text"
          placeholder="Enter QR token"
          value={scanCode}
          onChange={(e) => setScanCode(e.target.value)}
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
          {loading ? "Scanning..." : "Scan"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </motion.div>
  );
};

export default ScanQR;