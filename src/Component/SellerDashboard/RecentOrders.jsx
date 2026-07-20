"use client";

import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";

export default function RecentOrders({ orders = [] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
    >
      {/* Header */}

      <div className="flex flex-col gap-4 border-b border-orange-100 p-5 transition-colors duration-300 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Your latest customer orders
          </p>
        </div>

        <button className="rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600">
          View All
        </button>
      </div>

      {orders.length === 0 ? (
        <div className="p-10 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            No Recent Orders
          </h3>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Your recent orders will appear here.
          </p>
        </div>
      ) : (
        <>
          {/* Desktop */}

          <div className="hidden overflow-x-auto lg:block">
            <table className="min-w-full">
              <thead className="bg-orange-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Buyer
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Product
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Price
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <motion.tr
                    key={order._id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="border-b border-orange-100 transition hover:bg-orange-50 dark:border-gray-800 dark:hover:bg-gray-800"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {order.buyerInfo.name}
                    </td>

                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {order.productInfo.productTitle}
                    </td>

                    <td className="px-6 py-4 font-semibold text-orange-600">
                      ${order.productInfo.productPrice}
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge status={order.orderStatus} />
                    </td>

                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}

          <div className="space-y-4 p-4 lg:hidden">
            {orders.map((order, index) => (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-orange-100 bg-orange-50 p-4 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {order.buyerInfo.name}
                  </h3>

                  <StatusBadge status={order.orderStatus} />
                </div>

                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  {order.productInfo.productTitle}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-orange-600">
                    ${order.productInfo.productPrice}
                  </span>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
}