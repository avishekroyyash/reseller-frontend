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

export default function Banner() {
  return (
    <section className="bg-linear-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">

        {/* Hero */}
        <div className="grid lg:grid-cols-2 items-center gap-14">

          {/* Left */}
          <div>

            <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-full">
              #1 Trusted Reseller Marketplace
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Buy Smart,
              <br />
              Sell Faster with
              <span className="text-orange-500"> ReBazaar</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Discover quality products from trusted sellers, enjoy amazing
              deals, and grow your reseller business with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Link
                href="/products"
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
          <div className="relative">

            <Image
              src={bannerImg}
              alt="Banner"
              width={600}
              height={600}
              className="w-full mx-auto rounded-2xl"
            />

            {/* Floating Card 1 */}

            <div className="hidden md:flex absolute top-8 left-0 bg-white shadow-xl rounded-xl px-5 py-3 items-center gap-3">

              <FaBoxOpen className="text-2xl text-orange-500" />

              <div>
                <h3 className="font-bold">5K+</h3>
                <p className="text-gray-500 text-sm">
                  Products
                </p>
              </div>

            </div>

            {/* Floating Card 2 */}

            <div className="hidden md:flex absolute bottom-8 right-0 bg-white shadow-xl rounded-xl px-5 py-3 items-center gap-3">

              <FaStore className="text-2xl text-orange-500" />

              <div>
                <h3 className="font-bold">2K+</h3>
                <p className="text-gray-500 text-sm">
                  Sellers
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>

              <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

                <FaUsers className="text-orange-500 text-2xl" />

              </div>

              <h2 className="mt-4 text-3xl font-bold">
                20K+
              </h2>

              <p className="text-gray-500">
                Happy Customers
              </p>

            </div>

            <div>

              <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

                <FaBoxOpen className="text-orange-500 text-2xl" />

              </div>

              <h2 className="mt-4 text-3xl font-bold">
                15K+
              </h2>

              <p className="text-gray-500">
                Products
              </p>

            </div>

            <div>

              <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

                <FaStore className="text-orange-500 text-2xl" />

              </div>

              <h2 className="mt-4 text-3xl font-bold">
                2K+
              </h2>

              <p className="text-gray-500">
                Trusted Sellers
              </p>

            </div>

            <div>

              <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

                <FaStar className="text-orange-500 text-2xl" />

              </div>

              <h2 className="mt-4 text-3xl font-bold">
                99%
              </h2>

              <p className="text-gray-500">
                Satisfaction
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}