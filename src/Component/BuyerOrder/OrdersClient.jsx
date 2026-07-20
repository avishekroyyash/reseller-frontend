"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaFirstOrder } from "react-icons/fa6";
import OrderCard from "./OrderCard";

export default function OrdersClient({ orders }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchSearch = order.productInfo.productTitle
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        status === "All" ||
        order.orderStatus.toLowerCase() === status.toLowerCase();

      return matchSearch && matchStatus;
    });
  }, [orders, search, status]);

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero */}

      <section className="bg-linear-to-r from-orange-500 to-orange-400 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="flex items-center gap-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              <FaFirstOrder />
              My Orders
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-orange-100 dark:text-gray-300 leading-7">
              Track every purchase, monitor delivery progress,
              cancel eligible orders and view complete order details.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">

        {/* Search */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-orange-100 dark:border-gray-800 p-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Search by product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border  border-gray-300 dark:border-gray-700    bg-white   dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 outline-none focus:ring-2  focus:ring-orange-500   " />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
      className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500">
              <option>All</option>
              <option>Pending</option>
              <option>Accepted</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>

          </div>
        </motion.div>

        {/* Total */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Total Orders ({filteredOrders.length})
          </h2>
        </motion.div>

        {/* Orders */}

        <motion.div
          layout
          className="space-y-6"
        >
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
              >
                <OrderCard order={order} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="
                rounded-2xl
                bg-white
                dark:bg-gray-900
                border
                border-orange-100
                dark:border-gray-800
                shadow-lg
                p-10
                sm:p-14
                text-center
              "
            >
              <div className="text-6xl">
                📦
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
                No Orders Found
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Try changing your search or filter.
              </p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
}