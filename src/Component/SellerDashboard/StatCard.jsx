"use client";

import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon,
  color = "from-orange-400 to-orange-600",
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 shadow-md transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        {/* Text */}

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-500 transition-colors duration-300 dark:text-gray-400">
            {title}
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-2 break-words text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:text-3xl"
          >
            {value}
          </motion.h2>

          <p className="mt-3 text-xs leading-5 text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:text-sm">
            {description}
          </p>
        </div>

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.12,
          }}
          transition={{
            duration: 0.2,
          }}
          className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-2xl text-white shadow-lg shadow-orange-500/30 sm:h-16 sm:w-16 sm:text-3xl`}
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
}