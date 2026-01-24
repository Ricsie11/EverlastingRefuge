import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { motion } from "framer-motion";

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api.get("/groups/")
      .then(res => setGroups(res.data))
      .catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {groups.map(group => (
        <div
          key={group.id}
          className="rounded-lg border p-4 dark:border-zinc-800"
        >
          <h3 className="font-semibold">{group.name}</h3>
          <p className="text-sm text-muted-foreground">
            {group.description || "No description"}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default Groups;