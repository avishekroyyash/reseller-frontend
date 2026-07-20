"use client";

import { motion } from "framer-motion";
import { FiGrid, FiBriefcase } from "react-icons/fi";

export default function CategoriesStats({
  totalCategories,
  totalJobs,
}) {
  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
      },
    }),
  };

  return (
    <section className="relative z-10 mt-10 lg:mt-14 mb-12 lg:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Total Categories */}

        <motion.div
          custom={0}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="
            rounded-2xl
            p-6
            lg:p-8
            border
            shadow-lg
            transition-all
            duration-300

            bg-white
            border-orange-100

            dark:bg-gray-900
            dark:border-gray-800
            dark:shadow-black/30
          "
        >
          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Total Categories
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {totalCategories}
              </h2>
            </div>

            <div
              className="
                h-16
                w-16
                rounded-2xl
                flex
                items-center
                justify-center

                bg-orange-100
                dark:bg-orange-500/20
              "
            >
              <FiGrid className="text-3xl text-orange-500" />
            </div>

          </div>
        </motion.div>

        {/* Total Jobs */}

        <motion.div
          custom={1}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className=" rounded-2xl p-6 lg:p-8 border shadow-lg transition-all duration-300 bg-white border-orange-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-black/30 "
        >
          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Total Jobs
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {totalJobs}
              </h2>
            </div>

<div className="h-16 w-16 rounded-2xl flex items-center justify-center bg-orange-100 dark:bg-orange-500/20">
  <FiBriefcase className="text-3xl text-orange-500" />
</div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}