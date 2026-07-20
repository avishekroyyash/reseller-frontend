"use client";

import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon,
  textColor = "text-orange-600 dark:text-orange-400",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className=" relative overflow-hidden rounded-2xl  border-l-4 bg-white  dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl dark:hover:shadow-black/30 p-5 sm:p-6 transition-all duration-300 ">
      {/* Background Glow */}

      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-100 dark:bg-orange-500/10 blur-2xl" />

      <div className="relative flex items-center justify-between gap-4">

        {/* Left */}

        <div>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h2
            className={`mt-2 text-3xl sm:text-4xl font-bold ${textColor}`}
          >
            {value}
          </h2>
        </div>

        {/* Right */}

        <div className=" flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-500/20 text-3xl sm:text-4xl ">
          {icon}
        </div>

      </div>
    </motion.div>
  );
}