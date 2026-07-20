"use client";

import { motion } from "framer-motion";

export default function OrderStatusCard({
  title,
  value,
  percentage,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="space-y-3 rounded-xl border border-orange-100 bg-orange-50 p-4 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-800/60"
    >
      {/* Header */}

      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300 dark:text-gray-300 sm:text-base">
          {title}
        </h3>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {percentage.toFixed(0)}%
          </span>

          <span className="text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white">
            {value}
          </span>
        </div>
      </div>

      {/* Progress Bar */}

      <div className="h-3 w-full overflow-hidden rounded-full bg-orange-100 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${Math.min(100, Math.max(0, percentage))}%`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
}