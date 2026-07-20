"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineRefresh,
  HiOutlineX,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const FLOW = [
  "pending",
  "accepted",
  "processing",
  "shipped",
  "delivered",
];

export default function OrderStatusModal({
  isOpen,
  order,
  onClose,
  onSave,
  loading = false,
}) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (order) {
      setStatus("");
    }
  }, [order]);

  if (!order) return null;

  const currentIndex = FLOW.indexOf(order.orderStatus);
  const nextStatuses = FLOW.slice(currentIndex + 1);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: .9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .9, y: 40 }}
            transition={{ duration: .3 }}
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
                  <HiOutlineRefresh className="text-3xl" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Update Order Status
                  </h2>

                  <p className="mt-1 text-orange-100">
                    Update the delivery progress of this order.
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}

            <div className="space-y-6 p-6 sm:p-8">

              <div>
                <label className="mb-2 block font-semibold text-gray-800 dark:text-white">
                  Current Status
                </label>

                <div className="rounded-xl bg-orange-100 px-4 py-3 font-semibold capitalize text-orange-700 dark:bg-orange-500/20 dark:text-orange-400">
                  {order.orderStatus}
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-800 dark:text-white">
                  Select Next Status
                </label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-orange-500"
                >
                  <option value="">
                    Select Status
                  </option>

                  {nextStatuses.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </option>
                  ))}
                </select>

                {nextStatuses.length === 0 && (
                  <p className="mt-3 text-sm text-green-600 dark:text-green-400">
                    This order has already reached the final status.
                  </p>
                )}
              </div>

            </div>

            {/* Footer */}

            <div className="flex flex-col-reverse gap-3 border-t border-orange-100 p-6 dark:border-gray-800 sm:flex-row sm:justify-end">
              <button
                onClick={onClose}
                className="w-full rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 sm:w-auto"
              >
                Cancel
              </button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: .95 }}
                disabled={!status || loading}
                onClick={() => onSave(status)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                <HiOutlineCheckCircle className="text-xl" />

                {loading ? "Saving..." : "Save Changes"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}