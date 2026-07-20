"use client";

import { motion } from "framer-motion";

export default function DashboardStats({ orders }) {
  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (o) => o.orderStatus === "pending"
  ).length;

  const processingOrders = orders.filter(
    (o) => o.orderStatus === "processing"
  ).length;

  const deliveredOrders = orders.filter(
    (o) => o.orderStatus === "delivered"
  );

  const totalRevenue = deliveredOrders.reduce(
    (sum, item) =>
      sum + Number(item.productInfo.productPrice),
    0
  );

  const cards = [
    {
      title: "Total Orders",
      value: totalOrders,
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-500/20",
      icon: "📦",
    },
    {
      title: "Pending",
      value: pendingOrders,
      color: "text-red-600",
      bg: "bg-red-100 dark:bg-red-500/20",
      icon: "⏳",
    },
    {
      title: "Processing",
      value: processingOrders,
      color: "text-yellow-600",
      bg: "bg-yellow-100 dark:bg-yellow-500/20",
      icon: "🚚",
    },
    {
      title: "Revenue",
      value: `$${totalRevenue}`,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-500/20",
      icon: "💰",
    },
  ];

  return (
    <motion.div
      className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
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
      {cards.map((card) => (
        <motion.div
          key={card.title}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{
            duration: 0.25,
          }}
          className="overflow-hidden rounded-2xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {card.title}
              </p>

              <h2
                className={`mt-3 break-words text-3xl font-bold sm:text-4xl ${card.color}`}
              >
                {card.value}
              </h2>
            </div>

            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.1,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-3xl ${card.bg}`}
            >
              {card.icon}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}