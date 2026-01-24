import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="py-24 text-center">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Everlasting Refuge Church
      </motion.h1>

      <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
        A place of worship, growth, and spiritual transformation.
      </p>

      <div>
        <Link
          to="/login"
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded"
        >
          Login <ArrowRight size={18} />
        </Link>
        <Link to="/login" className="px-6 py-3 border rounded">
          Join a Group
        </Link>
      </div>
    </section>
  );
}

export default Home;
