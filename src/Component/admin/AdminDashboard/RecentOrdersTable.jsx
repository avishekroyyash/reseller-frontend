"use client";

import Image from "next/image";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

export default function RecentOrdersTable({ orders = [] }) {
  const paymentBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";

      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";

      default:
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    }
  };

  const orderBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";

      case "processing":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";

      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";

      case "cancelled":
      case "rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";

      case "accepted":
        return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300";

      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-orange-100 dark:border-gray-800 shadow-sm overflow-hidden transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-orange-100 dark:border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Recent Orders
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Latest marketplace orders
          </p>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-orange-50 dark:bg-gray-800">
            <tr>
              {[
                "Product",
                "Buyer",
                "Seller",
                "Payment",
                "Status",
                "Date",
                "Action",
              ].map((item) => (
                <th
                  key={item}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <motion.tr
                key={order._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.01 }}
                className="border-t border-gray-100 dark:border-gray-800 hover:bg-orange-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={order.productInfo.productImage}
                      alt={order.productInfo.productTitle}
                      width={50}
                      height={50}
                      className="rounded-lg object-cover"
                    />

                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {order.productInfo.productTitle}
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${order.productInfo.productPrice}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {order.buyerInfo.name}
                </td>

                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {order.sellerInfo.name}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${paymentBadge(
                      order.paymentStatus
                    )}`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${orderBadge(
                      order.orderStatus
                    )}`}
                  >
                    {order.orderStatus}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 text-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition">
                    <FiEye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden p-4 space-y-4">
        {orders.map((order) => (
          <motion.div
            key={order._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="border border-orange-100 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl p-4 transition"
          >
            <div className="flex gap-3">
              <Image
                src={order.productInfo.productImage}
                alt={order.productInfo.productTitle}
                width={70}
                height={70}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {order.productInfo.productTitle}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Buyer: {order.buyerInfo.name}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seller: {order.sellerInfo.name}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${paymentBadge(
                      order.paymentStatus
                    )}`}
                  >
                    {order.paymentStatus}
                  </span>

                  <span
                    className={`px-2 py-1 rounded-full text-xs ${orderBadge(
                      order.orderStatus
                    )}`}
                  >
                    {order.orderStatus}
                  </span>
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg h-fit transition">
                <FiEye size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}