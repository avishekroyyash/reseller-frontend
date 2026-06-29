"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaBoxes,
  FaTag,
  FaArrowRight,
} from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">

        {/* Wishlist */}
        <button
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-orange-500 hover:text-white"
          aria-label="Wishlist"
        >
          <FaHeart size={18} />
        </button>

        {/* Category */}
        <span className="absolute left-3 top-3 z-20 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow">
          {product.category}
        </span>

        {/* Product Image */}
        <div className="flex h-full w-full items-center justify-center p-5">
          <Image
            src={product.image}
            alt={product.title}
            width={260}
            height={260}
            className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Stock */}
        <span className="absolute bottom-3 left-3 z-20 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600 shadow">
          {product.stock} In Stock
        </span>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* Title */}
        <h2 className="line-clamp-1 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

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

        {/* Divider */}
        <div className="my-5 border-t border-gray-200"></div>

        {/* Footer */}
        <div className="flex items-center justify-between">

          {/* Price */}
          <div>
            <p className="text-xs text-gray-400">
              Price
            </p>

            <div className="flex items-center gap-2">
              <FaTag className="text-orange-500" />

              <span className="text-2xl font-bold text-orange-500">
                ${product.price}
              </span>
            </div>
          </div>

          {/* Button */}
          <Link
            href={`/products/${product._id}`}
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
          >
            Details
            <FaArrowRight size={12} />
          </Link>

        </div>

      </div>
    </div>
  );
}