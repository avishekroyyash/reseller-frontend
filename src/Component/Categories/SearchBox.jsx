"use client";

import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function SearchBox({
  search,
  setSearch,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="relative">

        {/* Search Icon */}
        <FiSearch
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-xl
            text-gray-400
            dark:text-gray-500
          "
        />

        {/* Search Input */}
        <motion.input
          whileFocus={{
            scale: 1.02,
          }}
          transition={{
            duration: 0.2,
          }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search category..."
          className="
            w-full
            rounded-full
            py-4
            pl-14
            pr-5

            text-sm
            sm:text-base

            border
            outline-none
            transition-all
            duration-300

            bg-white
            text-gray-900
            border-gray-200
            placeholder:text-gray-400

            focus:border-orange-500
            focus:ring-4
            focus:ring-orange-100

            dark:bg-gray-900
            dark:border-gray-700
            dark:text-white
            dark:placeholder:text-gray-500
            dark:focus:ring-orange-500/20

            shadow-lg
            dark:shadow-black/30
          "
        />

      </div>
    </motion.div>
  );
}