import { motion } from "framer-motion";

const StatCard = ({ title, value, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow"
  >
    <div className="flex items-center gap-3">
      <Icon className="text-blue-500" />
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  </motion.div>
);

export default StatCard;