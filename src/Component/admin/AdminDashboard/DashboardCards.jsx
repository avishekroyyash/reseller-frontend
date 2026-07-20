"use client";

import { motion } from "framer-motion";
import {
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiDollarSign,
} from "react-icons/fi";

const cards = [
  {
    key: "totalUsers",
    title: "Total Users",
    icon: FiUsers,
    color: "bg-blue-100 dark:bg-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    border: "from-blue-500 to-blue-400",
  },
  {
    key: "totalProducts",
    title: "Total Products",
    icon: FiPackage,
    color: "bg-orange-100 dark:bg-orange-500/20",
    iconColor: "text-orange-500 dark:text-orange-400",
    border: "from-orange-500 to-orange-400",
  },
  {
    key: "totalOrders",
    title: "Total Orders",
    icon: FiShoppingCart,
    color: "bg-green-100 dark:bg-green-500/20",
    iconColor: "text-green-600 dark:text-green-400",
    border: "from-green-500 to-green-400",
  },
  {
    key: "totalRevenue",
    title: "Total Revenue",
    icon: FiDollarSign,
    color: "bg-yellow-100 dark:bg-yellow-500/20",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    border: "from-yellow-500 to-yellow-400",
    prefix: "$",
  },
];

export default function DashboardCards({ dashboard }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.12,
              duration: 0.45,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group overflow-hidden rounded-3xl border border-orange-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg dark:shadow-black/30 transition-colors duration-300"
          >
            {/* Top Gradient */}

            <div
              className={`h-1.5 w-full bg-gradient-to-r ${card.border}`}
            />

            <div className="p-6">

              <div className="flex items-center justify-between">

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.08,
                  }}
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
                >
                  <Icon
                    className={`text-2xl ${card.iconColor}`}
                  />
                </motion.div>

                <span className="rounded-full bg-orange-100 dark:bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
                  Live
                </span>

              </div>

              <div className="mt-6">

                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {card.title}
                </p>

                <motion.h2
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.12 + 0.2,
                  }}
                  className="mt-2 text-3xl font-bold text-gray-800 dark:text-white"
                >
                  {card.prefix || ""}
                  {Number(
                    dashboard?.[card.key] || 0
                  ).toLocaleString()}
                </motion.h2>

              </div>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}