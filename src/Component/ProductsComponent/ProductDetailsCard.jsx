"use client";

import Image from "next/image";
import {
  FaStar,
  FaBoxes,
  FaTag,
  FaUserCircle,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ProductDetailsCard({ product }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-2xl bg-orange-50 p-6">
          <Image
            src={product.image}
            alt={product.title}
            width={450}
            height={450}
            priority
            className="h-auto max-h-[420px] w-auto object-contain transition duration-300 hover:scale-105"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col">
          {/* Category */}
          <div className="mb-3">
            <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>

            <span className="font-medium text-gray-700">
              4.0
            </span>

            <span className="text-gray-400">
              (25 Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Price
            </p>

            <div className="mt-2 flex items-center gap-2">
              <FaTag className="text-orange-500 text-xl" />

              <span className="text-5xl font-bold text-orange-500">
                ${product.price}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-8 grid grid-cols-2 gap-5 rounded-2xl bg-gray-50 p-5">
            <div>
              <p className="text-sm text-gray-500">
                Condition
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                {product.condition}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Stock
              </p>

              <p className="mt-1 flex items-center gap-2 font-semibold text-green-600">
                <FaBoxes />
                {product.stock} Available
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Seller
              </p>

              <p className="mt-1 flex items-center gap-2 font-semibold text-gray-800">
                <FaUserCircle className="text-orange-500" />
                {product.sellerName || "Unknown Seller"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Added On
              </p>

              <p className="mt-1 flex items-center gap-2 font-semibold text-gray-800">
                <FaCalendarAlt className="text-orange-500" />
                {product.createdAt
                  ? new Date(product.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              Description
            </h3>

            <p className="leading-8 text-gray-600">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}