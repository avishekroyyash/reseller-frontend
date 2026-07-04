"use client";

import { useState } from "react";
import {
  FaShoppingCart,
  FaBolt,
  FaMinus,
  FaPlus,
  FaTruck,
  FaShieldAlt,
  FaBoxOpen,
} from "react-icons/fa";

export default function ProductOrderCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const total = product.price * quantity;

  return (
    <div className="sticky top-24">
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">

        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Order Summary
        </h2>

        {/* Price */}
        <div className="flex items-center justify-between border-b pb-5">
          <span className="text-gray-500">
            Price
          </span>

          <span className="text-3xl font-bold text-orange-500">
            ${product.price}
          </span>
        </div>

        {/* Quantity */}
        <div className="mt-6">
          <p className="mb-3 font-semibold text-gray-700">
            Quantity
          </p>

          <div className="flex items-center justify-between rounded-xl border p-3">

            <button
              onClick={decrease}
              className="rounded-lg bg-gray-100 p-3 transition hover:bg-orange-500 hover:text-white"
            >
              <FaMinus />
            </button>

            <span className="text-xl font-bold">
              {quantity}
            </span>

            <button
              onClick={increase}
              className="rounded-lg bg-gray-100 p-3 transition hover:bg-orange-500 hover:text-white"
            >
              <FaPlus />
            </button>

          </div>
        </div>

        {/* Total */}
        <div className="mt-6 flex items-center justify-between border-b pb-5">
          <span className="font-semibold text-gray-700">
            Total
          </span>

          <span className="text-2xl font-bold text-orange-500">
            ${total}
          </span>
        </div>

        {/* Stock */}
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4">
          <FaBoxOpen className="text-green-600 text-xl" />

          <div>
            <p className="font-semibold text-green-700">
              In Stock
            </p>

            <p className="text-sm text-green-600">
              {product.stock} item(s) available
            </p>
          </div>
        </div>

        {/* Delivery */}
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-orange-50 p-4">
          <FaTruck className="text-orange-500 text-xl" />

          <div>
            <p className="font-semibold text-gray-800">
              Fast Delivery
            </p>

            <p className="text-sm text-gray-500">
              Estimated delivery in 2-5 days
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-blue-50 p-4">
          <FaShieldAlt className="text-blue-500 text-xl" />

          <div>
            <p className="font-semibold text-gray-800">
              Secure Payment
            </p>

            <p className="text-sm text-gray-500">
              100% protected checkout
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-4">

          <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600">
            <FaBolt />
            Buy Now
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-orange-500 py-4 text-lg font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
            <FaShoppingCart />
            Add to Wishlist
          </button>

        </div>

        {/* Extra Information */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">

          <h3 className="mb-4 font-semibold text-gray-800">
            Why Shop With Us?
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>✔ Secure payment</li>
            <li>✔ Fast nationwide delivery</li>
            <li>✔ Easy order tracking</li>
            <li>✔ Trusted reseller marketplace</li>
            <li>✔ Customer support available</li>
          </ul>

        </div>

      </div>
    </div>
  );
}