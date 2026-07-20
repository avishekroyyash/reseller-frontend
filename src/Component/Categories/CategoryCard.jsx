"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiCode,
  FiTrendingUp,
  FiBook,
  FiHeart,
  FiShoppingBag,
  FiUsers,
  FiTruck,
  FiDollarSign,
  FiCpu,
  FiBriefcase,
} from "react-icons/fi";

const iconMap = {
  IT: FiCode,
  Software: FiCpu,
  Marketing: FiTrendingUp,
  Finance: FiDollarSign,
  Education: FiBook,
  Healthcare: FiHeart,
  Sales: FiShoppingBag,
  HR: FiUsers,
  Logistics: FiTruck,
};

export default function CategoryCard({ category }) {
  const Icon = iconMap[category.category] || FiBriefcase;

  return (
    <Link
      href={`/all-products?category=${encodeURIComponent(
        category.category
      )}`}
      className="block"
    >
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          group
          h-full
          rounded-3xl
          p-6
          lg:p-8

          border
          transition-all
          duration-300

          bg-white
          border-gray-200
          shadow-md

          hover:border-orange-400
          hover:shadow-2xl

          dark:bg-gray-900
          dark:border-gray-800
          dark:hover:border-orange-500
          dark:shadow-black/30
        "
      >
        {/* Icon */}
        <div
          className="
            h-16
            w-16
            lg:h-20
            lg:w-20

            rounded-2xl

            flex
            items-center
            justify-center

            bg-orange-100
            dark:bg-orange-500/20

            group-hover:bg-orange-500
            transition-all
            duration-300
          "
        >
          <Icon
            className="
              text-3xl
              lg:text-4xl

              text-orange-500
              group-hover:text-white
              transition-all
              duration-300
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-6
            lg:mt-8

            text-xl
            lg:text-2xl

            font-bold

            text-gray-900
            dark:text-white
          "
        >
          {category.category}
        </h3>

        {/* Jobs */}
        <p
          className="
            mt-3

            text-sm
            lg:text-base

            text-gray-600
            dark:text-gray-400
          "
        >
          {category.totalJobs} Jobs Available
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <span
            className="
              font-semibold
              text-orange-500
              group-hover:text-orange-600
              dark:group-hover:text-orange-400
              transition
            "
          >
            Explore Jobs
          </span>

          <motion.div
            whileHover={{
              x: 6,
            }}
          >
            <FiArrowRight
              className="
                text-xl
                text-orange-500
              "
            />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}