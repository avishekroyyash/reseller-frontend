"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaStar,
  FaBoxes,
  FaTag,
  FaUserCircle,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ProductDetailsCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300"
    >
      <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2 lg:p-8">

        {/* ================= Image ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-950 p-6"
        >
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={450}
              height={450}
              priority
              className="h-auto max-h-[420px] w-auto object-contain"
            />
          </motion.div>
        </motion.div>

        {/* ================= Product Info ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-3"
          >
            <span className="rounded-full bg-orange-100 dark:bg-orange-900/40 px-4 py-1 text-sm font-semibold text-orange-600 dark:text-orange-300">
              {product.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white"
          >
            {product.title}
          </motion.h1>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex items-center gap-2"
          >
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                  }}
                >
                  <FaStar />
                </motion.div>
              ))}

              <FaStar className="text-gray-300 dark:text-gray-600" />
            </div>

            <span className="font-medium text-gray-700 dark:text-gray-200">
              4.0
            </span>

            <span className="text-gray-400 dark:text-gray-500">
              (25 Reviews)
            </span>
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Price
            </p>

            <div className="mt-2 flex items-center gap-2">
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <FaTag className="text-xl text-orange-500" />
              </motion.div>

              <span className="text-5xl font-bold text-orange-500">
                ${product.price}
              </span>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 grid grid-cols-2 gap-5 rounded-2xl bg-gray-50 dark:bg-gray-800 p-5"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Condition
              </p>

              <p className="mt-1 font-semibold text-gray-800 dark:text-white">
                {product.condition}
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Stock
              </p>

              <p className="mt-1 flex items-center gap-2 font-semibold text-green-600">
                <FaBoxes />
                {product.stock} Available
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Seller
              </p>

              <p className="mt-1 flex items-center gap-2 font-semibold text-gray-800 dark:text-white">
                <FaUserCircle className="text-orange-500" />
                {product.sellerName || "Unknown Seller"}
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Added On
              </p>

              <p className="mt-1 flex items-center gap-2 font-semibold text-gray-800 dark:text-white">
                <FaCalendarAlt className="text-orange-500" />
                {product.createdAt
                  ? new Date(product.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
              Description
            </h3>

            <p className="leading-8 text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}