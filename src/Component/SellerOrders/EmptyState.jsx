"use client";

import { motion } from "framer-motion";
import { HiOutlineInbox } from "react-icons/hi";

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-[400px] items-center justify-center rounded-2xl border border-orange-100 bg-white px-6 py-16 shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
    >
      <div className="max-w-md text-center">
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/20 dark:text-orange-400"
        >
          <HiOutlineInbox className="text-5xl" />
        </motion.div>

        <h2 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">
          No Orders Found
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
          Orders from customers will appear here once buyers start purchasing
          your products.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg"
        >
          Waiting for Orders
        </motion.div>
      </div>
    </motion.div>
  );
}