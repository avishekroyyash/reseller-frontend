"use client";

import Image from "next/image";
import OrderStatusBadge from "./OrderStatusBadge";


export default function OrderCard({
  order,
  onBuyerInfo,
  onStatusUpdate,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Product */}

      <div className="p-5">

        <div className="flex gap-4">

          <Image
            src={order.productInfo.productImage}
            alt={order.productInfo.productTitle}
            width={110}
            height={110}
            className="rounded-xl object-cover border"
          />

          <div className="flex-1">

            <h2 className="font-bold text-lg text-gray-800">
              {order.productInfo.productTitle}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Product ID
            </p>

            <p className="text-sm font-medium text-gray-700 break-all">
              {order.productInfo.productId}
            </p>

            <p className="mt-3 text-orange-600 text-xl font-bold">
              ${order.productInfo.productPrice}
            </p>

          </div>

        </div>

      </div>

      <div className="border-t" />

      {/* Buyer */}

      <div className="p-5 space-y-4">

        <div>

          <p className="text-sm text-gray-500">
            Buyer
          </p>

          <h3 className="font-semibold text-gray-800">
            {order.buyerInfo.name}
          </h3>

          <p className="text-sm text-gray-500">
            {order.buyerInfo.email}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div>

            <p className="text-sm text-gray-500">
              Payment
            </p>

            <span
              className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-semibold ${
                order.paymentStatus === "paid"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {order.paymentStatus}
            </span>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <div className="mt-1">
              <OrderStatusBadge
                status={order.orderStatus}
              />
            </div>

          </div>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Order Date
          </p>

          <p className="font-medium text-gray-700">
            {new Date(order.createdAt).toLocaleDateString()}
          </p>

        </div>

      </div>

      <div className="border-t" />

      {/* Buttons */}

      <div className="p-5 flex flex-col gap-3">

        <button
          onClick={() => onBuyerInfo(order)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          View Buyer Information
        </button>

        <button
          onClick={() => onStatusUpdate(order)}
          className="w-full border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white py-3 rounded-xl font-semibold transition"
        >
          Update Order Status
        </button>

      </div>

    </div>
  );
}