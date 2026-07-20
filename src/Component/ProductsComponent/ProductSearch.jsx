"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaUndo,
} from "react-icons/fa";

export default function ProductSearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [condition, setCondition] = useState(
    searchParams.get("condition") || ""
  );
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();

      params.set("page", "1");

      if (search) params.set("search", search);
      if (category) params.set("category", category);
      if (condition) params.set("condition", condition);
      if (sort) params.set("sort", sort);

      router.push(`/all-products?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, category, condition, sort, router]);

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setCondition("");
    setSort("");

    router.push("/all-products?page=1");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 rounded-2xl border border-orange-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-lg transition-colors duration-300"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-5 flex items-center gap-2"
      >
        <motion.div
          whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <FaFilter className="text-xl text-orange-500" />
        </motion.div>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Search & Filter Products
        </h2>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5"
      >
        {/* Search */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
          }}
          className="relative xl:col-span-2"
        >
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 py-3 pl-11 pr-4 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:focus:ring-orange-900"
          />
        </motion.div>

        {/* Category */}
        <motion.select
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
          }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:focus:ring-orange-900"
        >
          <option value="">All Categories</option>
          <option value="Books">Books</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Sports">Sports</option>
          <option value="Vehicle">Vehicle</option>
        </motion.select>

        {/* Condition */}
        <motion.select
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
          }}
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:focus:ring-orange-900"
        >
          <option value="">All Condition</option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Used">Used</option>
        </motion.select>

        {/* Sort + Reset */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
          }}
          className="flex gap-3"
        >
          <div className="relative flex-1">
            <FaSortAmountDown className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-3 pl-11 pr-4 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:focus:ring-orange-900"
            >
              <option value="">Sort By</option>
              <option value="latest">Latest</option>
              <option value="low">Price Low → High</option>
              <option value="high">Price High → Low</option>
              <option value="stock">Stock</option>
            </select>
          </div>

          <motion.button
            whileHover={{
              scale: 1.08,
              rotate: 180,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            onClick={handleReset}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white hover:bg-orange-600 shadow-lg"
          >
            <FaUndo />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}