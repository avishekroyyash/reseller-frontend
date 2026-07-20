"use client";

import { motion } from "framer-motion";
import OrderStatusCard from "./OrderStatusCard";

export default function OrderAnalytics({ dashboard }) {
  const total = dashboard?.totalOrders || 1;

  const analytics = [
    {
      title: "Accepted",
      value: dashboard?.acceptedOrders ?? 0,
      percentage: ((dashboard?.acceptedOrders ?? 0) / total) * 100,
      color: "bg-blue-500",
    },
    {
      title: "Processing",
      value: dashboard?.processingOrders ?? 0,
      percentage: ((dashboard?.processingOrders ?? 0) / total) * 100,
      color: "bg-orange-500",
    },
    {
      title: "Shipped",
      value: dashboard?.shippedOrders ?? 0,
      percentage: ((dashboard?.shippedOrders ?? 0) / total) * 100,
      color: "bg-purple-500",
    },
    {
      title: "Delivered",
      value: dashboard?.deliveredOrders ?? 0,
      percentage: ((dashboard?.deliveredOrders ?? 0) / total) * 100,
      color: "bg-green-500",
    },
    {
      title: "Rejected",
      value: dashboard?.rejectedOrders ?? 0,
      percentage: ((dashboard?.rejectedOrders ?? 0) / total) * 100,
      color: "bg-red-500",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30 sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
      >
        <h2 className="text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:text-2xl">
          Order Status Overview
        </h2>

        <p className="mt-2 text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">
          Monitor the current status of all your customer orders.
        </p>
      </motion.div>

      <motion.div
        className="mt-6 space-y-5"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {analytics.map((item) => (
          <motion.div
            key={item.title}
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ duration: 0.3 }}
          >
            <OrderStatusCard
              title={item.title}
              value={item.value}
              percentage={item.percentage}
              color={item.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}