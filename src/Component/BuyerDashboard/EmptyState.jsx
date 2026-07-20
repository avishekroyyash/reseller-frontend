"use client";

import { motion } from "framer-motion";

export default function EmptyState({
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        overflow-hidden

        rounded-3xl

        bg-white
        dark:bg-gray-900

        border
        border-gray-200
        dark:border-gray-800

        shadow-lg
        dark:shadow-black/30

        px-6
        py-12
        sm:px-10
        sm:py-14
        lg:px-14
        lg:py-16

        text-center

        transition-all
        duration-300
      "
    >
      {/* Background Decoration */}

      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-orange-100 dark:bg-orange-500/10 blur-3xl"></div>

      <div className="relative z-10">

        {/* Icon */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mx-auto

            flex
            items-center
            justify-center

            h-20
            w-20
            sm:h-24
            sm:w-24

            rounded-full

            bg-orange-100
            dark:bg-orange-500/20

            text-5xl
            sm:text-6xl
          "
        >
          📦
        </motion.div>

        {/* Title */}

        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          {title}
        </h2>

        {/* Description */}

        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-400 transition-colors duration-300">
          {description}
        </p>

      </div>
    </motion.div>
  );
}