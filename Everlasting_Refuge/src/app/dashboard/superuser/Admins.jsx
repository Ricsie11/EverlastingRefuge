import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Admins = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/superuser/users/")
      .then(res => setUsers(res.data))
      .catch(() => {});
  }, []);

  const promote = (id) => api.post(`/superuser/promote/${id}/`);
  const demote = (id) => api.post(`/superuser/demote/${id}/`);

  return (
    <div className="space-y-4">
      {users.map(u => (
        <div key={u.id} className="border p-4 rounded">
          <p>{u.email} — {u.role}</p>

          {u.role !== "ADMIN" ? (
            <button onClick={() => promote(u.id)}>Make Admin</button>
          ) : (
            <button onClick={() => demote(u.id)}>Remove Admin</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Admins;