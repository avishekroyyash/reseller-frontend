"use client";

import Image from "next/image";
import { FiEye, FiEdit2, FiAlertTriangle } from "react-icons/fi";
import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderCard({
  order,
  onView,
  onUpdate,
  onDispute,
}) {
  return (
    <div className="bg-white rounded-2xl shadow border border-orange-100 p-5 space-y-4">

      <div className="flex gap-4">

        <Image
          src={order.productInfo.productImage}
          alt={order.productInfo.productTitle}
          width={90}
          height={90}
          className="rounded-xl object-cover"
        />

        <div className="flex-1">

          <h2 className="font-bold text-lg">
            {order.productInfo.productTitle}
          </h2>

          <p className="text-orange-600 font-semibold mt-1">
            ${order.productInfo.productPrice}
          </p>

          <div className="mt-3">
            <OrderStatusBadge status={order.orderStatus} />
          </div>

        </div>

      </div>

      <hr />

      <div className="grid grid-cols-2 gap-3 text-sm">

        <div>
          <p className="text-gray-400">Buyer</p>
          <p className="font-semibold">{order.buyerInfo.name}</p>
        </div>

        <div>
          <p className="text-gray-400">Seller</p>
          <p className="font-semibold">{order.sellerInfo.name}</p>
        </div>

        <div>
          <p className="text-gray-400">Payment</p>

          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              order.paymentStatus === "paid"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {order.paymentStatus}
          </span>
        </div>

        <div>
          <p className="text-gray-400">Date</p>

          <p>
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>

      </div>

      <div className="flex gap-2 pt-2">

        <button
          onClick={() => onView(order)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <FiEye />
          View
        </button>

        <button
          onClick={() => onUpdate(order)}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <FiEdit2 />
          Update
        </button>

        <button
          onClick={() => onDispute(order)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <FiAlertTriangle />
          Dispute
        </button>

      </div>

    </div>
  );
}