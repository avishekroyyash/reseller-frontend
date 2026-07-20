"use client";

import { motion } from "framer-motion";
import {
  HiOutlineCube,
  HiOutlineShoppingBag,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
} from "react-icons/hi";

import StatCard from "./StatCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function DashboardCards({ dashboard }) {
  const cards = [
    {
      title: "Total Products",
      value: dashboard?.totalProducts ?? 0,
      description: "Products listed in your store",
      icon: <HiOutlineCube />,
    },
    {
      title: "Total Sales",
      value: dashboard?.deliveredOrders ?? 0,
      description: "Completed customer orders",
      icon: <HiOutlineShoppingBag />,
    },
    {
      title: "Total Revenue",
      value: `$${dashboard?.totalRevenue ?? 0}`,
      description: "Revenue from completed orders",
      icon: <HiOutlineCurrencyDollar />,
    },
    {
      title: "Pending Orders",
      value: dashboard?.pendingOrders ?? 0,
      description: "Orders waiting for your action",
      icon: <HiOutlineClock />,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {cards.map((card) => (
        <motion.div
          key={card.title}
          variants={itemVariants}
          whileHover={{
            y: -6,
            transition: { duration: 0.2 },
          }}
        >
          <StatCard
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}