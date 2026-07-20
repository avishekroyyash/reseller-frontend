"use client";

import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid({ categories }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="pb-16 lg:pb-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 lg:mb-10"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          Popular Categories
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400 text-base lg:text-lg">
          Explore jobs from different industries.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-5
          md:gap-6
          lg:gap-7
        "
      >
        {categories.map((category) => (
          <motion.div
            key={category.category}
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ duration: 0.4 }}
          >
            <CategoryCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}