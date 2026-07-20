"use client";

import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";


export default function ProductToolbar({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
}) {

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-900 border border-orange-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 sm:p-5 transition-colors duration-500"
    >

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


        {/* Search */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >

          <FiSearch className="absolute left-4 top-3.5 text-gray-400 dark:text-gray-500" />


          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full h-11 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white pl-11 pr-4 outline-none focus:border-orange-500 transition"
          />

        </motion.div>




        {/* Category Filter */}

        <motion.select
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="h-11 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white px-4 outline-none focus:border-orange-500 transition"
        >

          <option value="all">
            All Categories
          </option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Fashion">
            Fashion
          </option>

          <option value="Books">
            Books
          </option>

          <option value="Furniture">
            Furniture
          </option>

        </motion.select>





        {/* Status Filter */}

        <motion.select
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
          className="h-11 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white px-4 outline-none focus:border-orange-500 transition"
        >

          <option value="all">
            All Status
          </option>

          <option value="pending">
            Pending
          </option>

          <option value="approved">
            Approved
          </option>

          <option value="rejected">
            Rejected
          </option>

        </motion.select>


      </div>

    </motion.div>
  );
}