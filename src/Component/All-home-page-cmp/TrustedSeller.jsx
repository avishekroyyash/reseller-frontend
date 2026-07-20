"use client";

import Image from "next/image";
import {
  FaStar,
  FaCheckCircle,
  FaBoxOpen,
  FaShoppingBag,
  FaUsers,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const sellers = [
  {
    id: 1,
    name: "TechZone Store",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
    rating: 4.9,
    reviews: 1250,
    products: 320,
    sales: "5.8K",
    followers: "2.4K",
    response: "10 min",
  },
  {
    id: 2,
    name: "Fashion Hub",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    rating: 4.8,
    reviews: 980,
    products: 210,
    sales: "4.3K",
    followers: "1.9K",
    response: "15 min",
  },
  {
    id: 3,
    name: "Home Essentials",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    rating: 5.0,
    reviews: 1540,
    products: 470,
    sales: "8.2K",
    followers: "3.6K",
    response: "8 min",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function TrustedSellers() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-black transition-colors duration-300 py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 px-5 py-2 rounded-full font-semibold">
            Trusted Sellers
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-5">
            Meet Our Top Rated Sellers
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-5 text-lg">
            Buy confidently from verified sellers with outstanding ratings,
            fast responses, and thousands of successful transactions.
          </p>
        </motion.div>

        {/* Sellers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sellers.map((seller) => (
            <motion.div
              key={seller.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-orange-100 dark:border-gray-700 shadow-md hover:shadow-2xl"
            >
              {/* Cover */}
              <div className="h-28 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

              {/* Avatar */}
              <div className="relative flex justify-center -mt-14">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <Image
                    src={seller.image}
                    width={110}
                    height={110}
                    alt={seller.name}
                    className="rounded-full border-4 border-white dark:border-gray-800 object-cover w-28 h-28"
                  />
                </motion.div>
              </div>

              <div className="p-6">

                {/* Name */}
                <div className="flex justify-center items-center gap-2">
                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {seller.name}
                  </motion.h3>

                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <FaCheckCircle className="text-orange-500" />
                  </motion.div>
                </div>

                {/* Rating */}
                <div className="flex justify-center items-center gap-2 mt-3">
                  <FaStar className="text-yellow-400" />

                  <span className="font-semibold text-gray-900 dark:text-white">
                    {seller.rating}
                  </span>

                  <span className="text-gray-500 dark:text-gray-400">
                    ({seller.reviews} Reviews)
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">

                  {[
                    {
                      icon: FaBoxOpen,
                      value: seller.products,
                      label: "Products",
                    },
                    {
                      icon: FaShoppingBag,
                      value: seller.sales,
                      label: "Sales",
                    },
                    {
                      icon: FaUsers,
                      value: seller.followers,
                      label: "Followers",
                    },
                    {
                      icon: FaBolt,
                      value: seller.response,
                      label: "Response",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={index}
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="bg-orange-50 dark:bg-gray-700 rounded-xl p-4 text-center"
                      >
                        <motion.div
                          whileHover={{
                            rotate: 10,
                            scale: 1.2,
                          }}
                        >
                          <Icon className="mx-auto text-orange-500 text-xl mb-2" />
                        </motion.div>

                        <p className="font-bold text-gray-900 dark:text-white">
                          {item.value}
                        </p>

                        <span className="text-sm text-gray-500 dark:text-gray-300">
                          {item.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                >
                  Visit Store
                  <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div>
            <h3 className="text-3xl font-bold text-white">
              Become a Trusted Seller
            </h3>

            <p className="text-orange-100 mt-3 max-w-2xl">
              Build your reputation, reach thousands of buyers, and grow your
              business with ReBazar.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 px-8 py-4 rounded-full font-semibold hover:bg-orange-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            Start Selling
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}