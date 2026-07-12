"use client";

import Image from "next/image";

import OrderCard from "./OrderCard";
import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderTable({orders,
    onBuyerInfo,
    onStatusUpdate, onReject,}) {
  return (
    <>
      {/* Desktop */}

      <div className="hidden lg:block bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-orange-500 text-white">

            <tr>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Buyer
              </th>

              <th className="p-4 text-center">
                Price
              </th>

              <th className="p-4 text-center">
                Payment
              </th>

              <th className="p-4 text-center">
                Status
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order._id}
                className="border-b hover:bg-orange-50 transition"
              >

                {/* Product */}

                <td className="p-4">

                  <div className="flex items-center gap-4">

                    <Image
                      src={order.productInfo.productImage}
                      alt={order.productInfo.productTitle}
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />

                    <div>

                      <h2 className="font-semibold">
                        {order.productInfo.productTitle}
                      </h2>

                      <p className="text-gray-500 text-sm">
                        ID :
                        {" "}
                        {order.productInfo.productId}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Buyer */}

                <td className="p-4">

                  <p className="font-semibold">
                    {order.buyerInfo.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.buyerInfo.email}
                  </p>

                </td>

                {/* Price */}

                <td className="p-4 text-center font-bold text-orange-600">
                  $
                  {order.productInfo.productPrice}
                </td>

                {/* Payment */}

                <td className="p-4 text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>

                </td>

                {/* Status */}

                <td className="p-4 text-center">

                  <OrderStatusBadge
                    status={order.orderStatus}
                  />

                </td>

                {/* Actions */}

                <td className="p-4">

               <div className="flex flex-wrap justify-center gap-2">

  {/* Buyer Button */}
  <button
    onClick={() => onBuyerInfo?.(order)}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition"
  >
    Buyer
  </button>

  {/* Status Button (Always Visible) */}
  <button
    onClick={() => onStatusUpdate?.(order)}
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition"
  >
    Status
  </button>

  {/* Reject Button (Only Pending Orders) */}
  {order.orderStatus === "pending" && (
    <button
      onClick={() => onReject?.(order)}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
    >
      Reject
    </button>
  )}

</div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    

      <div className="lg:hidden">
        {/* OrderCard component will be added in Part 2B */}
          {/* Mobile Hint */}
      <div className="grid gap-6 lg:hidden">

  {orders.map((order) => (
   <OrderCard
  key={order._id}
  order={order}
  onBuyerInfo={onBuyerInfo}
  onStatusUpdate={onStatusUpdate}
  onReject={onReject}
/>
  ))}

</div>
      </div>
    </>
  );
}