"use client";

import { motion } from "framer-motion";
import { FiRefreshCw, FiShield } from "react-icons/fi";

export default function DashboardHeader({ onRefresh }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-orange-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg dark:shadow-black/30 p-5 sm:p-6 transition-colors duration-300"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-center gap-4 sm:gap-5">

          <motion.div
            initial={{ scale: 0.8, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 180,
            }}
            whileHover={{
              rotate: 10,
              scale: 1.05,
            }}
            className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-500/20"
          >
            <FiShield className="text-3xl text-orange-500" />
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white"
            >
              Admin Dashboard
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400"
            >
              Welcome back! Here's an overview of your marketplace.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-xs sm:text-sm text-gray-400 dark:text-gray-500"
            >
              {today}
            </motion.p>
          </div>

        </div>

        {/* Right */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={onRefresh}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600"
        >
          <motion.div
            whileHover={{
              rotate: 180,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <FiRefreshCw className="text-lg" />
          </motion.div>

          Refresh Dashboard
        </motion.button>

      </div>
    </motion.section>
  );
}