"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiEye, FiEdit2, FiAlertTriangle } from "react-icons/fi";
import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderCard({
  order,
  onView,
  onUpdate,
  onDispute,
}) {
  return (
    <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:.4}}
      whileHover={{scale:1.02}}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-orange-100 dark:border-gray-700 p-4 sm:p-5 space-y-4 transition-colors duration-500"
    >

      <div className="flex gap-4">

        <Image
          src={order.productInfo.productImage}
          alt={order.productInfo.productTitle}
          width={90}
          height={90}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border dark:border-gray-700"
        />

        <div className="flex-1">

          <h2 className="font-bold text-base sm:text-lg text-gray-800 dark:text-white">
            {order.productInfo.productTitle}
          </h2>

          <p className="text-orange-600 dark:text-orange-400 font-semibold mt-1">
            ${order.productInfo.productPrice}
          </p>

          <div className="mt-3">
            <OrderStatusBadge status={order.orderStatus}/>
          </div>

        </div>

      </div>

      <hr className="border-gray-200 dark:border-gray-700"/>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">

        <div>
          <p className="text-gray-400 dark:text-gray-500">Buyer</p>
          <p className="font-semibold text-gray-800 dark:text-white">
            {order.buyerInfo.name}
          </p>
        </div>

        <div>
          <p className="text-gray-400 dark:text-gray-500">Seller</p>
          <p className="font-semibold text-gray-800 dark:text-white">
            {order.sellerInfo.name}
          </p>
        </div>

        <div>
          <p className="text-gray-400 dark:text-gray-500">Payment</p>

          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              order.paymentStatus==="paid"
              ?"bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
              :"bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
            }`}
          >
            {order.paymentStatus}
          </span>

        </div>

        <div>
          <p className="text-gray-400 dark:text-gray-500">Date</p>

          <p className="text-gray-700 dark:text-gray-300">
            {new Date(order.createdAt).toLocaleDateString()}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">

        <button
          onClick={()=>onView(order)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FiEye/>
          View
        </button>

        <button
          onClick={()=>onUpdate(order)}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FiEdit2/>
          Update
        </button>

        <button
          onClick={()=>onDispute(order)}
          className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FiAlertTriangle/>
          Dispute
        </button>

      </div>

    </motion.div>
  );
}