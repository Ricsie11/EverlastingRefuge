import { useEffect, useState } from "react";
import { api } from "../../services/api";

const QR = () => {
  const [qrs, setQrs] = useState([]);

  const fetchQRs = () => {
    api.get("/admin/qrs/")
      .then(res => setQrs(res.data))
      .catch(() => {});
  };

  useEffect(fetchQRs, []);

  const regenerate = async (groupId) => {
    await api.post(`/groups/${groupId}/qr/`);
    fetchQRs();
  };

  return (
    <div className="space-y-6">
      {qrs.map(qr => (
        <div key={qr.id} className="border p-4 rounded-lg">
          <h4 className="font-semibold">{qr.group_name}</h4>

          <img
            src={qr.qr_image}
            alt="QR Code"
            className="w-40 my-4"
          />

          <p className="text-sm">
            Expires: {new Date(qr.expires_at).toLocaleString()}
          </p>

          <button
            onClick={() => regenerate(qr.group_id)}
            className="mt-2 px-4 py-2 bg-primary text-white rounded"
          >
            Regenerate QR
          </button>
        </div>
      ))}
    </div>
  );
};

export default QR;