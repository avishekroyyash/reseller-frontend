"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineIdentification,
  HiOutlineX,
} from "react-icons/hi";

export default function BuyerInfoModal({
  isOpen,
  onClose,
  buyer,
}) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && buyer && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/40"
          >
            {/* Header */}

            <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-6 sm:px-8">
              <button
                onClick={onClose}
                className="absolute right-5 top-5 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
              >
                <HiOutlineX className="text-xl" />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white">
                  <HiOutlineUser className="text-3xl" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Buyer Information
                  </h2>

                  <p className="mt-1 text-orange-100">
                    Customer account details
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}

            <div className="space-y-5 p-6 sm:p-8">

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-4 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                  <HiOutlineUser className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Full Name
                  </p>

                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {buyer.name}
                  </h3>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-4 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                  <HiOutlineMail className="text-xl" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email Address
                  </p>

                  <h3 className="break-all font-semibold text-gray-900 dark:text-white">
                    {buyer.email}
                  </h3>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-4 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                  <HiOutlineIdentification className="text-xl" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Buyer ID
                  </p>

                  <h3 className="break-all font-semibold text-gray-900 dark:text-white">
                    {buyer.userId}
                  </h3>
                </div>
              </motion.div>

            </div>

            {/* Footer */}

            <div className="border-t border-orange-100 p-6 dark:border-gray-800">
              <button
                onClick={onClose}
                className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}