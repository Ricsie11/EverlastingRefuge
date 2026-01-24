import { motion } from "framer-motion";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md"
      >
        {children}
        <button onClick={onClose} className="mt-4 text-sm text-red-500">
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;