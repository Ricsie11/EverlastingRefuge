import { motion } from "framer-motion";
import { pageTransition } from "../../utils/motion";

export default function Dashboard() {
  return (
    <motion.section {...pageTransition}>
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </motion.section>
  );
}