"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaBoxOpen,
  FaUser,
  FaStore,
  FaReceipt,
} from "react-icons/fa";

export default function OrderDetailsPage({ order }) {
  const product = order?.productInfo || {};
  const buyer = order?.buyerInfo || {};
  const seller = order?.sellerInfo || {};

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300 py-8">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .45 }}
          className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-8"
        >
          <div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Order Details
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              View complete information about your purchase.
            </p>

          </div>

          <Link
            href="/dashboard/buyer/orders"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600"
          >
            <FaArrowLeft />
            Back
          </Link>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Product */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
          >

            <Image
              src={product.productImage}
              alt={product.productTitle}
              width={700}
              height={700}
              className="h-72 lg:h-96 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {product.productTitle}
              </h2>

              <p className="mt-4 text-3xl font-bold text-orange-500">
                ${product.productPrice}
              </p>

            </div>

          </motion.div>

          {/* Right Side */}

          <div className="lg:col-span-2 space-y-6">

            <Section
              icon={<FaReceipt />}
              title="Order Information"
            >
              <Info title="Order ID" value={order._id} />
              <Info title="Order Status" value={order.orderStatus} />
              <Info title="Payment Status" value={order.paymentStatus} />
              <Info
                title="Order Date"
                value={new Date(order.createdAt).toLocaleString()}
              />
              <Info
                title="Payment Intent"
                value={order.paymentIntentId}
              />
              <Info
                title="Stripe Session"
                value={order.stripeSessionId}
              />
            </Section>

            <Section
              icon={<FaUser />}
              title="Buyer Information"
            >
              <Info title="Name" value={buyer.name} />
              <Info title="Email" value={buyer.email} />
            </Section>

            <Section
              icon={<FaStore />}
              title="Seller Information"
            >
              <Info title="Name" value={seller.name} />
              <Info title="Email" value={seller.email} />
            </Section>

            <Section
              icon={<FaBoxOpen />}
              title="Product Information"
            >
              <Info
                title="Product ID"
                value={product.productId}
              />
              <Info
                title="Product Name"
                value={product.productTitle}
              />
              <Info
                title="Price"
                value={`$${product.productPrice}`}
              />
            </Section>

          </div>

        </div>

      </div>

    </div>
  );
}

/* ---------------- Section ---------------- */

function Section({ title, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .45 }}
      whileHover={{ y: -3 }}
      className="
        rounded-3xl
        bg-white
        dark:bg-gray-900
        border
        border-gray-200
        dark:border-gray-700
        shadow-lg
        p-6
        transition-colors
      "
    >
      <div className="flex items-center gap-3 mb-6">

        <div className="text-orange-500 text-xl">
          {icon}
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {children}
      </div>
    </motion.div>
  );
}

/* ---------------- Info Card ---------------- */

function Info({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className=" rounded-2xl border border-orange-200  dark:border-gray-700 bg-orange-50 dark:bg-gray-800 p-4 transition-colors">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <p className="mt-2 break-all font-semibold text-gray-900 dark:text-white">
        {value || "-"}
      </p>
    </motion.div>
  );
}