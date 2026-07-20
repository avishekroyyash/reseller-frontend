"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaUsers,
  FaBoxOpen,
  FaStore,
  FaStar,
} from "react-icons/fa";

 import bannerImg from "../../../public/Image/banner.png"; // Change to your image
 import banner1 from "../../../public/Image/banner1.png";
import banner2 from "../../../public/Image/banner2.png";
import banner3 from "../../../public/Image/banner3.png";
import banner4 from "../../../public/Image/banner4.png";
import banner5 from "../../../public/Image/banner5.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Banner() {

  const banners = [
    bannerImg,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
];

const [current, setCurrent] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, 5000);

  return () => clearInterval(timer);
}, [banners.length]);


  return (
<section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">

        {/* Hero */}
        <div className="grid lg:grid-cols-2 items-center gap-14">

          {/* Left */}
          <div>

            <span className="inline-block bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 font-semibold px-4 py-2 rounded-full">
              #1 Trusted Reseller Marketplace
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Buy Smart,
              <br />
              Sell Faster with
              <span className="text-orange-500"> ReBazaar</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
              Discover quality products from trusted sellers, enjoy amazing
              deals, and grow your reseller business with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Link
                href="/all-products"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                Shop Now
                <FaArrowRight />
              </Link>

              <Link
                href="/register"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Become Seller
              </Link>

            </div>

          </div>

          {/* Right */}
        <div className="relative h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-2xl">

  <AnimatePresence mode="wait">

    <motion.div
      key={current}
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -100,
      }}
      transition={{
        duration: 0.7,
      }}
      className="absolute inset-0"
    >
      <Image
        src={banners[current]}
        alt={`Banner ${current + 1}`}
        fill
        className="object-contain"
        priority
        
      />
   
    </motion.div>

  </AnimatePresence>
    <div className="flex justify-center mt-6 gap-3">

  {banners.map((_, index) => (

    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`h-3 rounded-full transition-all duration-300 ${
        current === index
          ? "w-8 bg-orange-500"
          : "w-3 bg-gray-300"
      }`}
    />

  ))}

</div>
</div>


        </div>

        {/* Statistics */}

       <div className="mt-16 rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-8 transition-colors">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>

              <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">

                <FaUsers className="text-orange-500 text-2xl" />

              </div>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                20K+
              </h2>

              <p className="text-gray-500 dark:text-gray-300">
                Happy Customers
              </p>

            </div>

            <div>

              <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">

                <FaBoxOpen className="text-orange-500 text-2xl" />

              </div>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                15K+
              </h2>

              <p className="text-gray-500 dark:text-gray-300">
                Products
              </p>

            </div>

            <div>

              <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">

                <FaStore className="text-orange-500 text-2xl" />

              </div>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                2K+
              </h2>

              <p className="text-gray-500 dark:text-gray-300">
                Trusted Sellers
              </p>

            </div>

            <div>

              <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">

                <FaStar className="text-orange-500 text-2xl" />

              </div>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                99%
              </h2>

              <p className="text-gray-500 dark:text-gray-300">
                Satisfaction
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}