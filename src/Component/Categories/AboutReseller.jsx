"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiShield,
  FiDollarSign,
  FiUsers,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function AboutReseller() {
  const features = [
    {
      icon: FiUsers,
      title: "Trusted Sellers",
      description:
        "Connect with verified sellers offering quality new and pre-owned products.",
    },
    {
      icon: FiDollarSign,
      title: "Affordable Prices",
      description:
        "Compare prices from multiple sellers and find the best deals that fit your budget.",
    },
    {
      icon: FiShield,
      title: "Secure Shopping",
      description:
        "Enjoy a safe marketplace with trusted transactions and reliable customer support.",
    },
    {
      icon: FiShoppingBag,
      title: "Wide Product Selection",
      description:
        "Explore thousands of products across electronics, fashion, books, vehicles, home essentials, and more.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <span className="inline-flex rounded-full bg-orange-100 dark:bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-600 dark:text-orange-400">
              About Our Marketplace
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Buy & Sell with Confidence on Our{" "}
              <span className="text-orange-500">
                Reseller Marketplace
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
              Our reseller marketplace connects buyers with trusted sellers,
              making it easy to discover quality products at competitive prices.
              Whether you're shopping for electronics, fashion, books, home
              essentials, or vehicles, you'll find a wide selection from
              verified sellers all in one place.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Thousands of quality products across multiple categories.",
                "Verified sellers offering trusted products and services.",
                "Easy product discovery with category-based browsing.",
                "Secure shopping experience with transparent pricing.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="mt-1 text-orange-500 text-xl shrink-0" />

                  <p className="text-gray-600 dark:text-gray-400">
                    {item}
                  </p>
                </motion.div>
              ))}

            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              className="inline-block"
            >
              <Link
                href="/all-products"
                className="inline-flex items-center gap-3 mt-10 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Explore Products
                <FiArrowRight />
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{ duration: .3 }}
                  className="
                    group
                    rounded-3xl
                    p-7

                    border
                    transition-all

                    bg-white
                    border-gray-200
                    shadow-lg

                    hover:border-orange-400
                    hover:shadow-2xl

                    dark:bg-gray-900
                    dark:border-gray-800
                  "
                >
                  <div
                    className="
                      h-16
                      w-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center

                      bg-orange-100
                      dark:bg-orange-500/20

                      group-hover:bg-orange-500
                      transition
                    "
                  >
                    <Icon className="text-3xl text-orange-500 group-hover:text-white transition" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}