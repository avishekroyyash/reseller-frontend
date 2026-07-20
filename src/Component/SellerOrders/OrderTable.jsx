"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import OrderCard from "./OrderCard";
import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderTable({
  orders,
  onBuyerInfo,
  onStatusUpdate,
  onReject,
}) {
  return (
    <>
      {/* ================= Desktop ================= */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="hidden overflow-x-auto rounded-2xl border border-orange-100 bg-white shadow-xl transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30 lg:block"
      >
        <table className="min-w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Buyer</th>
              <th className="px-6 py-4 text-center">Price</th>
              <th className="px-6 py-4 text-center">Payment</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-orange-100 transition hover:bg-orange-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                {/* Product */}

                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={order.productInfo.productImage}
                      alt={order.productInfo.productTitle}
                      width={70}
                      height={70}
                      className="rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="font-semibold text-gray-900 dark:text-white">
                        {order.productInfo.productTitle}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        ID: {order.productInfo.productId}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Buyer */}

                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {order.buyerInfo.name}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {order.buyerInfo.email}
                  </p>
                </td>

                {/* Price */}

                <td className="px-6 py-4 text-center font-bold text-orange-600">
                  ${order.productInfo.productPrice}
                </td>

                {/* Payment */}

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      order.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>

                {/* Status */}

                <td className="px-6 py-4 text-center">
                  <OrderStatusBadge status={order.orderStatus} />
                </td>

                {/* Actions */}

                <td className="px-6 py-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    <button
                      onClick={() => onBuyerInfo?.(order)}
                      className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
                    >
                      Buyer
                    </button>

                    <button
                      onClick={() => onStatusUpdate?.(order)}
                      className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600"
                    >
                      Status
                    </button>

                    {order.orderStatus === "pending" && (
                      <button
                        onClick={() => onReject?.(order)}
                        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                      >
                        Reject
                      </button>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* ================= Mobile ================= */}

      <div className="grid gap-5 lg:hidden">
        {orders.map((order, index) => (
          <motion.div
            key={order._id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <OrderCard
              order={order}
              onBuyerInfo={onBuyerInfo}
              onStatusUpdate={onStatusUpdate}
              onReject={onReject}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}