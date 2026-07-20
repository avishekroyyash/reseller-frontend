"use client";

import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function DashboardStats({
  totalOrders,
  wishlistCount,
  recentPurchases,
  cancelledOrder,
}) {
  const stats = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: "📦",
      textColor: "text-orange-600 dark:text-orange-400",
    },
    {
      title: "Wishlist",
      value: wishlistCount,
      icon: "❤️",
      textColor: "text-pink-600 dark:text-pink-400",
    },
    {
      title: "Recent Purchases",
      value: recentPurchases,
      icon: "🛍️",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Cancelled Orders",
      value: cancelledOrder,
      icon: "❌",
      textColor: "text-red-600 dark:text-red-400",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
          >
            <StatCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              textColor={stat.textColor}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}