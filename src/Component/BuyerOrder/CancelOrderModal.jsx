"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertTriangle, FiX } from "react-icons/fi";

export default function CancelOrderModal({
  isOpen,
  onClose,
  onConfirm,
  loading = false,
}) {
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setReason("");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-2xl"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 transition hover:bg-white/20 dark:hover:bg-gray-700"
            >
              <FiX className="text-xl text-white sm:text-gray-700 dark:text-white" />
            </button>

            {/* Header */}

            <div className="bg-red-500 px-6 py-6">
              <h2 className="text-2xl font-bold text-white">
                Cancel Order
              </h2>

              <p className="mt-1 text-red-100">
                Please confirm your action.
              </p>
            </div>

            {/* Body */}

            <div className="p-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <FiAlertTriangle className="text-5xl text-red-500" />
              </div>

              <h3 className="mt-5 text-center text-2xl font-bold text-gray-800 dark:text-white">
                Are you sure?
              </h3>

              <p className="mt-3 text-center text-gray-500 dark:text-gray-300">
                Cancelling this order cannot be undone.
                <br />
                This action is only available while your order is still pending.
              </p>

              <textarea
                rows={4}
                placeholder="Reason for cancellation (optional)"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="mt-6 w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-800 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              />
            </div>

            {/* Footer */}

            <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-6 dark:border-gray-700 sm:flex-row sm:justify-end">
              <button
                onClick={onClose}
                className="w-full rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 sm:w-auto"
              >
                Keep Order
              </button>

              <button
                disabled={loading}
                onClick={() => onConfirm(reason)}
                className="w-full rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {loading ? "Cancelling..." : "Cancel Order"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}