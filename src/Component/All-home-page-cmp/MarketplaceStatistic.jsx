"use client";

import {
  FaBoxOpen,
  FaStore,
  FaUsers,
  FaShoppingBag,
} from "react-icons/fa";
import { motion } from "framer-motion";

const statistics = [
  {
    id: 1,
    title: "Total Products",
    value: "150K+",
    icon: FaBoxOpen,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50 dark:bg-gray-800",
  },
  {
    id: 2,
    title: "Total Sellers",
    value: "12K+",
    icon: FaStore,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50 dark:bg-gray-800",
  },
  {
    id: 3,
    title: "Total Buyers",
    value: "75K+",
    icon: FaUsers,
    color: "from-orange-600 to-red-500",
    bg: "bg-orange-50 dark:bg-gray-800",
  },
  {
    id: 4,
    title: "Completed Orders",
    value: "320K+",
    icon: FaShoppingBag,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50 dark:bg-gray-800",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function MarketplaceStatistics() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 font-semibold text-sm">
            Marketplace Statistics
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            ReBazar in Numbers
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Our growing marketplace connects thousands of buyers and sellers,
            making second-hand shopping easier, safer, and more reliable every
            day.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className={`${item.bg} group rounded-3xl border border-orange-100 dark:border-gray-700 p-8 text-center shadow-md hover:shadow-2xl`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-4xl shadow-lg`}
                >
                  <Icon />
                </motion.div>

                {/* Number */}
                <motion.h3
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white"
                >
                  {item.value}
                </motion.h3>

                {/* Title */}
                <p className="mt-2 text-gray-600 dark:text-gray-300 font-medium">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-10 lg:px-14 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <h3 className="text-3xl font-bold text-white">
              Join the Fastest Growing Reseller Marketplace
            </h3>

            <p className="text-orange-100 mt-3 max-w-2xl">
              Buy quality second-hand products, sell unused items, and become
              part of a trusted marketplace with thousands of successful
              transactions every day.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 font-semibold px-8 py-4 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            Start Buying & Selling
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}