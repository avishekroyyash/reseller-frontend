"use client";

import { motion } from "framer-motion";
import PaymentStatusBadge from "./PaymentStatusBadge";

export default function PaymentCard({ payment }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      transition={{ duration: 0.35 }}
     className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
    >
      {/* Header */}

      <div
       className="flex flex-col gap-4 border-b border-orange-100 p-5 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Transaction
          </h2>

          <p className="mt-1 break-all text-sm text-gray-500 dark:text-gray-400">
            {payment.transactionId}
          </p>
        </div>

        <div className="text-left sm:text-right">
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400">
            ${payment.amount}
          </h1>

          <div className="mt-2">
            <PaymentStatusBadge status={payment.paymentStatus} />
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
        <InfoItem
          label="Buyer Name"
          value={payment.name}
        />

        <InfoItem
          label="Email"
          value={payment.email}
        />

        <InfoItem
          label="Order ID"
          value={payment.orderId}
          breakWord
        />

        <InfoItem
          label="Payment Date"
          value={new Date(payment.createdAt).toLocaleString()}
        />
      </div>
    </motion.div>
  );
}

function InfoItem({ label, value, breakWord = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
  className="rounded-xl border border-orange-100 bg-orange-50 p-4 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {label}
      </p>

      <h3
        className={`mt-2 font-semibold text-gray-900 dark:text-white ${
          breakWord ? "break-all" : ""
        }`}
      >
        {value}
      </h3>
    </motion.div>
  );
}