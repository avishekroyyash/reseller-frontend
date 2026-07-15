"use client";

import Image from "next/image";
import {
  FiEye,
  FiEdit2,
  FiAlertTriangle,
} from "react-icons/fi";
import { useState } from "react";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderCard from "./OrderCard";



export default function OrderTable({
   orders,
    onView,
    onUpdate, onDispute,
}) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <>
      {/* Desktop */}

      <div className="hidden lg:block bg-white rounded-2xl shadow border border-orange-100 overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-orange-500 text-white">

            <tr>

              <th className="px-5 py-4 text-left">Product</th>

              <th className="px-5 py-4 text-left">Buyer</th>

              <th className="px-5 py-4 text-left">Seller</th>

              <th className="px-5 py-4 text-left">Price</th>

              <th className="px-5 py-4 text-left">Payment</th>

              <th className="px-5 py-4 text-left">Status</th>

              <th className="px-5 py-4 text-left">Date</th>

              <th className="px-5 py-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order._id}
                className="border-b hover:bg-orange-50"
              >

                <td className="px-5 py-4">

                  <div className="flex items-center gap-3">

                    <Image
                      src={order.productInfo.productImage}
                      alt={order.productInfo.productTitle}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />

                    <div>

                      <p className="font-semibold">
                        {order.productInfo.productTitle}
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-5 py-4">

                  <p className="font-semibold">
                    {order.buyerInfo.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.buyerInfo.email}
                  </p>

                </td>

                <td className="px-5 py-4">

                  <p className="font-semibold">
                    {order.sellerInfo.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.sellerInfo.email}
                  </p>

                </td>

                <td className="px-5 py-4">
                  ${order.productInfo.productPrice}
                </td>

                <td className="px-5 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>

                </td>

                <td className="px-5 py-4">
                  <OrderStatusBadge status={order.orderStatus} />
                </td>

                <td className="px-5 py-4">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                <td className="px-5 py-4">

                  <div className="flex justify-center gap-2">

                    <button
                        onClick={() => onView(order)}
                      className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <FiEye />
                    </button>

                    <button      onClick={() => onUpdate(order)}
                      className="p-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <FiEdit2 />
                    </button>

                    <button   onClick={() => onDispute(order)}
                      className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
                    >
                      <FiAlertTriangle />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="grid gap-5 lg:hidden">

        {orders.map((order) => (

       <OrderCard
  key={order._id}
   order={order}
    onView={onView}
    onUpdate={onUpdate}
   onDispute={onDispute}
/>

        ))}

      </div>
    </>
  );
}