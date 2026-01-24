import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Shield, Clock, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const Settings = () => {
  const [settings, setSettings] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.get("/superuser/settings/")
      .then(res => setSettings(res.data))
      .catch(() => {});
  }, []);

  const updateSetting = async (key, value) => {
    setSaving(true);
    try {
      const res = await api.patch("/superuser/settings/", {
        [key]: value,
      });
      setSettings(res.data);
    } finally {
      setSaving(false);
    }
  };

  if (!settings) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-xl"
    >
      {/* SYSTEM SECURITY */}
      <div className="rounded-lg border p-4 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-2">
          <Shield size={18} />
          <h3 className="font-semibold">Security</h3>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm">Allow Admin QR Regeneration</span>
          <input
            type="checkbox"
            checked={settings.admin_can_regenerate_qr}
            onChange={(e) =>
              updateSetting("admin_can_regenerate_qr", e.target.checked)
            }
          />
        </div>
      </div>

      {/* QR EXPIRATION */}
      <div className="rounded-lg border p-4 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={18} />
          <h3 className="font-semibold">QR Expiration</h3>
        </div>

        <input
          type="number"
          min={1}
          className="w-full border rounded px-3 py-2 dark:bg-zinc-900"
          value={settings.qr_valid_hours}
          onChange={(e) =>
            updateSetting("qr_valid_hours", Number(e.target.value))
          }
        />
        <p className="text-xs text-muted mt-1">
          Validity duration (hours)
        </p>
      </div>

      {/* SYSTEM ACTIONS */}
      <div className="rounded-lg border p-4 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-2">
          <RefreshCcw size={18} />
          <h3 className="font-semibold">System Actions</h3>
        </div>

        <button
          disabled={saving}
          onClick={() => api.post("/superuser/rotate-qr-tokens/")}
          className="px-4 py-2 bg-destructive text-white rounded"
        >
          Force Rotate All QR Tokens
        </button>
      </div>
    </motion.div>
  );
};

export default Settings;