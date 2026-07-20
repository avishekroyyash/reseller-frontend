"use client";

import { motion } from "framer-motion";
import { FiDatabase } from "react-icons/fi";

export default function EmptyState() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-[70vh] items-center justify-center bg-orange-50 dark:bg-gray-950 px-4 py-8 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        whileHover={{ y: -5 }}
        className="w-full max-w-xl rounded-3xl border border-orange-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 sm:p-10 lg:p-12 text-center shadow-xl dark:shadow-black/30 transition-colors duration-300"
      >
        {/* Icon */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 180,
          }}
          className="mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/20"
        >
          <FiDatabase className="text-4xl sm:text-5xl text-orange-500" />
        </motion.div>

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white"
        >
          No Dashboard Data
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-400"
        >
          There is currently no data available for your marketplace.
          Once users, products and orders are added, they will
          automatically appear here.
        </motion.p>

        {/* Decorative Badge */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 inline-flex rounded-full bg-orange-100 dark:bg-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-600 dark:text-orange-400"
        >
          Waiting for marketplace activity...
        </motion.div>
      </motion.div>
    </motion.section>
  );
}