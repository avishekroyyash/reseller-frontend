"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CategoriesHeader from "./CategoriesHeader";
import CategoriesStats from "./CategoriesStats";
import SearchBox from "./SearchBox";
import CategoryGrid from "./CategoryGrid";
import EmptyState from "./EmptyState";
import AboutReseller from "./AboutReseller";

export default function CategoriesPage({ categories }) {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [categories, search]);

  const totalJobs = categories.reduce(
    (sum, item) => sum + item.totalJobs,
    0
  );

  return (
    <main
      className="
      min-h-screen
      transition-all
      duration-500
      bg-gray-50
      dark:bg-gray-950
      "
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CategoriesHeader />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
        >
          <CategoriesStats
            totalCategories={categories.length}
            totalJobs={totalJobs}
          />
        </motion.div>

        {/* Search */}
        <motion.div
          className="my-8 lg:my-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
        >
          <SearchBox
            search={search}
            setSearch={setSearch}
          />
        </motion.div>

        {/* Category Grid */}
        <AnimatePresence mode="wait">
          {filteredCategories.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .4 }}
            >
              <CategoryGrid categories={filteredCategories} />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EmptyState />
            </motion.div>
          )}
        </AnimatePresence>

        {/* About */}
        <motion.div
          className="mt-14 lg:mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <AboutReseller />
        </motion.div>

      </div>
    </main>
  );
}