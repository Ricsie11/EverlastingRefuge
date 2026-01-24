import { useContext } from "react";
import { useAuth } from "../../context/AuthContext";

function MyGroup() {
  const { user } = useContext(useAuth);

  if (!user?.group) {
    return <p>You have not joined a group.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">My Group</h2>
      <p>{user.group.name}</p>
    </div>
  );
}

export default MyGroup;
