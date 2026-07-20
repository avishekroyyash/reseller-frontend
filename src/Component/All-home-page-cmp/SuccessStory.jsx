"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaUserCheck,
} from "react-icons/fa";

const stories = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Verified Buyer",
    badge: "Buyer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    story:
      "I bought a refurbished laptop through ReBazar and saved over 40%. The seller was trustworthy, and delivery was fast. Highly recommended!",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    role: "Top Seller",
    badge: "Seller",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    story:
      "ReBazar helped me turn my unused electronics into extra income. I've completed more than 300 successful sales with excellent customer feedback.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Verified Buyer",
    badge: "Buyer",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    story:
      "The platform made it easy to compare prices and communicate with sellers. I found exactly what I needed within minutes.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function SuccessStories() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 font-semibold px-4 py-2 rounded-full text-sm">
            Success Stories
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mt-5">
            Buyers & Sellers Love ReBazar
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 dark:text-gray-300 text-lg">
            Thousands of people trust ReBazar to buy and sell quality
            second-hand products safely and easily.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stories.map((story) => (
            <motion.div
              key={story.id}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-orange-100 dark:border-gray-700"
            >
              {/* Quote */}
              <motion.div
                whileHover={{ rotate: -10, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaQuoteLeft className="text-4xl text-orange-200 dark:text-orange-400 mb-5" />
              </motion.div>

              {/* Story */}
              <p className="text-gray-600 dark:text-gray-300 leading-7 mb-8">
                {story.story}
              </p>

              {/* Rating */}
              <div className="flex gap-1 text-orange-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.3,
                      rotate: 15,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaStar />
                  </motion.div>
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-4">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                >
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-100 dark:border-orange-800"
                  />
                </motion.div>

                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                    {story.name}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {story.role}
                  </p>

                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    className="inline-block mt-2 bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {story.badge}
                  </motion.span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
          >
            <FaUserCheck />
            Join Our Success Story
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}