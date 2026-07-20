"use client";

import { motion } from "framer-motion";

export default function CategoriesHeader() {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-20
      lg:py-28
      transition-all
      duration-500

      bg-gradient-to-r
      from-orange-400
      via-orange-500
      to-orange-600

      dark:from-gray-950
      dark:via-gray-900
      dark:to-black
      "
    >
      {/* Background Blur Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="
        absolute
        -left-24
        -top-24
        h-72
        w-72
        rounded-full
        bg-white/10
        dark:bg-orange-500/10
        blur-3xl
        "
      />

      {/* Background Blur Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="
        absolute
        -right-24
        -bottom-24
        h-80
        w-80
        rounded-full
        bg-white/10
        dark:bg-orange-500/10
        blur-3xl
        "
      />

      {/* Small Floating Circle */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
        absolute
        top-16
        left-1/4
        h-5
        w-5
        rounded-full
        bg-white/40
        dark:bg-orange-400/40
        "
      />

      {/* Small Floating Circle */}
      <motion.div
        animate={{
          y: [15, -15, 15],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="
        absolute
        bottom-20
        right-1/4
        h-8
        w-8
        rounded-full
        bg-white/30
        dark:bg-orange-500/30
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="
          inline-block
          rounded-full
          border
          border-white/30
          bg-white/20
          dark:bg-orange-500/20
          px-5
          py-2
          text-sm
          font-semibold
          text-white
          backdrop-blur-md
          "
        >
          Explore Categories
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="
          mt-6
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-extrabold
          text-white
          leading-tight
          "
        >
          Browse Job Categories
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          className="
          mt-6
          max-w-3xl
          mx-auto
          text-base
          sm:text-lg
          lg:text-xl
          leading-8
          text-orange-100
          dark:text-gray-300
          "
        >
          Find the perfect career by exploring thousands of opportunities
          across different industries, companies, and professions.
        </motion.p>
      </div>
    </section>
  );
}