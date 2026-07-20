"use client";

import { motion } from "framer-motion";
import { HiOutlineChartBar } from "react-icons/hi";

export default function DashboardHeader() {
  return (
    <motion.div
      className="mb-8 sm:mb-10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          transition={{ duration: 0.2 }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30 sm:h-16 sm:w-16"
        >
          <HiOutlineChartBar className="text-3xl sm:text-4xl" />
        </motion.div>

        {/* Text */}

        <div>
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:text-3xl lg:text-4xl"
          >
            Seller Dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-2 max-w-2xl text-sm text-gray-600 transition-colors duration-300 dark:text-gray-400 sm:text-base"
          >
            Track your store performance, monitor sales, manage orders, and
            analyze your business growth from one place.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}