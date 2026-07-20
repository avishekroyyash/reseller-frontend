"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderCard({
  order,
  onBuyerInfo,
  onStatusUpdate,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
    >
      {/* Product */}

      <div className="p-5">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Image
            src={order.productInfo.productImage}
            alt={order.productInfo.productTitle}
            width={110}
            height={110}
            className="h-28 w-28 rounded-xl border border-orange-100 object-cover dark:border-gray-700"
          />

          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {order.productInfo.productTitle}
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Product ID
            </p>

            <p className="break-all text-sm font-medium text-gray-700 dark:text-gray-300">
              {order.productInfo.productId}
            </p>

            <p className="mt-4 text-2xl font-bold text-orange-600">
              ${order.productInfo.productPrice}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-100 dark:border-gray-800" />

      {/* Buyer */}

      <div className="space-y-5 p-5">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Buyer
          </p>

          <h3 className="font-semibold text-gray-900 dark:text-white">
            {order.buyerInfo.name}
          </h3>

          <p className="break-all text-sm text-gray-500 dark:text-gray-400">
            {order.buyerInfo.email}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Payment */}

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Payment
            </p>

            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                order.paymentStatus === "paid"
                  ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
              }`}
            >
              {order.paymentStatus}
            </span>
          </div>

          {/* Status */}

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Status
            </p>

            <div className="mt-2">
              <OrderStatusBadge
                status={order.orderStatus}
              />
            </div>
          </div>
        </div>

        {/* Date */}

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Order Date
          </p>

          <p className="font-medium text-gray-700 dark:text-gray-300">
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="border-t border-orange-100 dark:border-gray-800" />

      {/* Buttons */}

      <div className="flex flex-col gap-3 p-5">
        <button
          onClick={() => onBuyerInfo(order)}
          className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
        >
          View Buyer Information
        </button>

        <button
          onClick={() => onStatusUpdate(order)}
          className="w-full rounded-xl border border-orange-500 py-3 font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-500 hover:text-white dark:border-orange-500 dark:text-orange-400 dark:hover:text-white"
        >
          Update Order Status
        </button>
      </div>
    </motion.div>
  );
}