"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaBoxes,
  FaTag,
  FaArrowRight,
  FaUserCircle,
  FaRegClock,
} from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}

      <div className="relative h-64 overflow-hidden bg-linear-to-br from-orange-50 via-white to-orange-100">

        {/* Wishlist */}
        <button
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
        >
          <FaHeart />
        </button>

        {/* Category */}
        <span className="absolute left-3 top-3 z-20 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow">
          {product.category}
        </span>

        {/* Image */}

        <div className="flex h-full items-center justify-center p-6">

          <Image
            src={product.image}
            alt={product.title}
            width={280}
            height={280}
            className="max-h-full rounded-2xl w-auto object-contain transition duration-500 group-hover:scale-110"
          />

        </div>

        {/* Stock */}

        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-600 backdrop-blur">
          {product.stock} In Stock
        </span>

      </div>

      {/* ================= BODY ================= */}

      <div className="flex flex-1 flex-col p-5">

        <h2 className="line-clamp-1 text-lg font-bold text-gray-800 group-hover:text-orange-500 transition">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Seller */}

        <div className="mt-4 flex items-center justify-between text-sm">

          <div className="flex items-center gap-2 text-gray-600">
            <FaUserCircle className="text-orange-500" />
            <span>{product.sellerName}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-400">
            <FaRegClock size={12} />
            <span>New</span>
          </div>

        </div>

        {/* Condition */}

        <div className="mt-4 flex items-center justify-between">

          <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
            {product.condition}
          </span>

          <div className="flex items-center gap-1 text-sm text-gray-500">

            <FaBoxes className="text-orange-500" />

            <span>{product.stock} Left</span>

          </div>

        </div>

        <div className="my-5 border-t border-gray-100"></div>

        {/* Footer */}

        <div className="mt-auto flex items-center justify-between">

          <div>

            <p className="text-xs text-gray-400">
              Price
            </p>

            <div className="mt-1 flex items-center gap-2">

              <FaTag className="text-orange-500" />

              <span className="text-3xl font-bold text-orange-500">
                ${product.price}
              </span>

            </div>

          </div>

          <Link
            href={`/products/${product._id}`}
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-orange-700"
          >
            Details
            <FaArrowRight size={12} />
          </Link>

        </div>

      </div>

    </div>
  );
}