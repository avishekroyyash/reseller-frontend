"use client";

import StatusBadge from "./StatusBadge";

export default function RecentOrders({
  orders = [],
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100">

      <div className="flex justify-between items-center p-6 border-b">

        <h2 className="text-2xl font-bold">
          Recent Orders
        </h2>

        <button className="text-orange-600 font-semibold hover:underline">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-orange-50">

            <tr>

              <th className="text-left p-4">
                Buyer
              </th>

              <th className="text-left p-4">
                Product
              </th>

              <th className="text-left p-4">
                Price
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order._id}
                className="border-b hover:bg-orange-50 transition"
              >

                <td className="p-4 font-medium">
                  {order.buyerInfo.name}
                </td>

                <td className="p-4">
                  {order.productInfo.productTitle}
                </td>

                <td className="p-4 font-semibold">
                  ${order.productInfo.productPrice}
                </td>

                <td className="p-4">
                  <StatusBadge
                    status={order.orderStatus}
                  />
                </td>

                <td className="p-4 text-gray-500">
                  {new Date(
                    order.createdAt
                  ).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}