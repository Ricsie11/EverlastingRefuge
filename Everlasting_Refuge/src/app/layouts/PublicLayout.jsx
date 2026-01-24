import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen px-4 md:px-12"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
}