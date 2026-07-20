"use client";

import { motion } from "framer-motion";
import PaymentCard from "../BuyerPayment/PaymentCard";


export default function PaymentHistoryClient({ payments }) {
  const totalSpent = payments.reduce(
    (total, p) => total + Number(p.amount),
    0
  );

  const successPayments = payments.filter(
    (p) => p.paymentStatus === "success"
  ).length;

  return (
    <section
      className=" min-h-screen bg-orange-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400">
            Payment History
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            View all your payment transactions.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          <StatCard
            title="Total Payments"
            value={payments.length}
            color="text-orange-600 dark:text-orange-400"
          />

          <StatCard
            title="Successful"
            value={successPayments}
            color="text-green-600"
          />

          <StatCard
            title="Total Spent"
            value={`$${totalSpent}`}
            color="text-orange-600 dark:text-orange-400"
          />
        </motion.div>

        {/* Payment List */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-8 space-y-5"
        >
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .05,
                }}
              >
                <PaymentCard payment={payment} />
              </motion.div>
            ))
          ) : (
            <div className="rounded-2xl bg-white dark:bg-gray-900 p-10 shadow text-center">
              <div className="text-6xl">💳</div>

              <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
                No Payment History
              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Your completed payments will appear here.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ title, value, color }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className=" rounded-2xl bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 shadow-lg p-6 transition-colors ">
      <p className="text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h2 className={`mt-3 text-3xl font-bold ${color}`}>
        {value}
      </h2>
    </motion.div>
  );
}