"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHome,
  FaBoxOpen,
  FaEnvelope,
} from "react-icons/fa";

export default function SuccessCard({
  customerEmail,
  amount,
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-orange-50 dark:bg-gray-950 px-4 py-10 transition-colors duration-300">

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full
          max-w-2xl
          rounded-3xl
          border
          border-orange-200
          dark:border-gray-800
          bg-white
          dark:bg-gray-900
          shadow-2xl
          p-6
          sm:p-8
          md:p-10
        "
      >

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 180,
          }}
          className="flex justify-center"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
            <FaCheckCircle className="text-6xl text-green-500" />
          </div>
        </motion.div>

        <h1 className="mt-6 text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Payment Successful
        </h1>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300 leading-7">
          Thank you for your purchase. Your payment has been verified and your
          order has been placed successfully.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl border border-orange-100 dark:border-gray-700 bg-orange-50 dark:bg-gray-800 p-5">

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Paid Amount
            </p>

            <h2 className="mt-2 text-3xl font-bold text-orange-600">
              ${amount}
            </h2>

          </div>

          <div className="rounded-2xl border border-orange-100 dark:border-gray-700 bg-orange-50 dark:bg-gray-800 p-5">

            <div className="flex gap-3 items-center">
              <FaEnvelope className="text-orange-500" />

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>

                <p className="break-all text-gray-900 dark:text-white">
                  {customerEmail}
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-8 rounded-2xl border border-orange-200 dark:border-gray-700 bg-orange-50 dark:bg-gray-800 p-6">

          <div className="flex items-start gap-3">

            <FaBoxOpen className="mt-1 text-2xl text-orange-500" />

            <div>

              <h3 className="font-bold text-gray-900 dark:text-white">
                Your order is confirmed
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                You can track your order anytime from your dashboard.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <Link
            href="/"
            className="flex-1 rounded-xl border-2 border-orange-500 py-3 flex justify-center items-center gap-2 font-semibold  text-orange-500 hover:bg-orange-500 hover:text-white transition ">
            <FaHome />
            Home
          </Link>

        <Link
  href="/dashboard/buyer/orders"
  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white whitespace-nowrap transition hover:bg-orange-600"
>
  <FaBoxOpen />
  <span>My Orders</span>
</Link>

        </div>

      </motion.div>

    </main>
  );
}