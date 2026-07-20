"use client";

import { motion } from "framer-motion";
import { FiSearch, FiFilter } from "react-icons/fi";

export default function SearchFilter({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 rounded-2xl border border-orange-100 bg-white p-5 shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Search */}

        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400 dark:text-gray-500" />

          <input
            type="text"
            placeholder="Search by product, buyer name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        {/* Status */}

        <div className="relative">
          <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400 dark:text-gray-500" />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full appearance-none rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-10 text-gray-900 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <option>All</option>
            <option>pending</option>
            <option>accepted</option>
            <option>processing</option>
            <option>shipped</option>
            <option>delivered</option>
            <option>rejected</option>
          </select>

          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}