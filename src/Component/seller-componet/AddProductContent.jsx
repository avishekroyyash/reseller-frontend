"use client";

import AddProductForm from "@/app/dashboard/seller/add-product/AddProductForm";
import { motion } from "framer-motion";
import { HiOutlinePlusCircle } from "react-icons/hi";


export default function AddProductContent({ user }) {
  return (
    <div className="min-h-screen bg-orange-50 px-4 py-6 transition-colors duration-300 dark:bg-gray-950 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
      >
        {/* Header */}

        <div className="border-b border-orange-100 bg-linear-to-r from-orange-500 to-orange-600 px-6 py-8 dark:border-gray-800">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.08,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur"
            >
              <HiOutlinePlusCircle className="text-4xl" />
            </motion.div>

            <div>
              <h1 className="text-3xl font-bold text-white">
                Add Product
              </h1>

              <p className="mt-2 text-orange-100">
                Create a new product listing for your store.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="p-5 sm:p-8"
        >
          <AddProductForm user={user} />
        </motion.div>
      </motion.div>
    </div>
  );
}