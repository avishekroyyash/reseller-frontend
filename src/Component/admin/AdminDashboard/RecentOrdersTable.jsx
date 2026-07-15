"use client";

import Image from "next/image";
import { FiEye } from "react-icons/fi";

export default function RecentOrdersTable({ orders = [] }) {
  const paymentBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  const orderBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "processing":
        return "bg-blue-100 text-blue-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      case "accepted":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b border-orange-100">

        <div>

          <h2 className="text-xl font-bold text-gray-800">
            Recent Orders
          </h2>

          <p className="text-sm text-gray-500">
            Latest marketplace orders
          </p>

        </div>

      </div>

      {/* Desktop */}

      <div className="hidden lg:block overflow-x-auto">

        <table className="w-full">

          <thead className="bg-orange-50">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Buyer
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Seller
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Payment
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Date
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-t hover:bg-orange-50 transition"
              >
                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <Image
                      src={order.productInfo.productImage}
                      alt={order.productInfo.productTitle}
                      width={50}
                      height={50}
                      className="rounded-lg object-cover"
                    />

                    <div>

                      <p className="font-semibold">
                        {order.productInfo.productTitle}
                      </p>

                      <p className="text-sm text-gray-500">
                        ${order.productInfo.productPrice}
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-4">
                  {order.buyerInfo.name}
                </td>

                <td className="px-6 py-4">
                  {order.sellerInfo.name}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${paymentBadge(
                      order.paymentStatus
                    )}`}
                  >
                    {order.paymentStatus}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${orderBadge(
                      order.orderStatus
                    )}`}
                  >
                    {order.orderStatus}
                  </span>

                </td>

                <td className="px-6 py-4 text-sm">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 text-center">

                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition">
                    <FiEye />
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="lg:hidden p-4 space-y-4">

        {orders.map((order) => (
          <div
            key={order._id}
            className="border border-orange-100 rounded-xl p-4"
          >
            <div className="flex gap-3">

              <Image
                src={order.productInfo.productImage}
                alt={order.productInfo.productTitle}
                width={70}
                height={70}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">

                <h3 className="font-semibold">
                  {order.productInfo.productTitle}
                </h3>

                <p className="text-sm text-gray-500">
                  Buyer: {order.buyerInfo.name}
                </p>

                <p className="text-sm text-gray-500">
                  Seller: {order.sellerInfo.name}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">

                  <span
                    className={`px-2 py-1 rounded-full text-xs ${paymentBadge(
                      order.paymentStatus
                    )}`}
                  >
                    {order.paymentStatus}
                  </span>

                  <span
                    className={`px-2 py-1 rounded-full text-xs ${orderBadge(
                      order.orderStatus
                    )}`}
                  >
                    {order.orderStatus}
                  </span>

                </div>

              </div>

              <button className="bg-orange-500 text-white p-2 rounded-lg h-fit">
                <FiEye />
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}