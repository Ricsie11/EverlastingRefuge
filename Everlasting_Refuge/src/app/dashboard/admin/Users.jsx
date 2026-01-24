import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users/")
      .then(res => setUsers(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Role</th>
            <th className="text-left p-2">Group</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b">
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">{u.group || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;