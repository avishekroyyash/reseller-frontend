"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiCreditCard,
  FiShoppingBag,
  FiHeart,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";

export default function QuickActions() {
  const actions = [
    {
      title: "Payment History",
      href: "/dashboard/buyer/payment-history",
      icon: FiCreditCard,
      primary: true,
    },
    {
      title: "My Orders",
      href: "/dashboard/buyer/orders",
      icon: FiShoppingBag,
    },
    {
      title: "Wishlist",
      href: "/dashboard/buyer/wishlist",
      icon: FiHeart,
    },
    {
      title: "My Profile",
      href: "/dashboard/buyer/profile",
      icon: FiUser,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        rounded-3xl
        bg-white
        dark:bg-gray-900
        border
        border-gray-200
        dark:border-gray-800
        shadow-lg
        dark:shadow-black/30
        p-6
        lg:p-8
        transition-colors
        duration-300
      "
    >
      {/* Heading */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Access your frequently used pages.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              <Link
                href={action.href}
                className={`
                  group
                  flex
                  items-center
                  justify-between

                  rounded-2xl

                  p-5

                  transition-all
                  duration-300

                  ${
                    action.primary
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                      : "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl

                      ${
                        action.primary
                          ? "bg-white/20"
                          : "bg-orange-100 dark:bg-orange-500/20"
                      }
                    `}
                  >
                    <Icon
                      className={`text-2xl ${
                        action.primary
                          ? "text-white"
                          : "text-orange-500"
                      }`}
                    />
                  </div>

                  <span className="font-semibold">
                    {action.title}
                  </span>
                </div>

                <FiArrowRight
                  className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}