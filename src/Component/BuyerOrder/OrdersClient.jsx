"use client";

import { useMemo, useState } from "react";
import OrderCard from "./OrderCard";
import { FaFirstOrder } from "react-icons/fa6";


export default function OrdersClient({ orders }) {
    console.log(orders,'ORDER-CLIEN');
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchSearch = order.productInfo.productTitle.toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        status === "All" || order.orderStatus === status;

      return matchSearch && matchStatus;
    });
  }, [orders, search, status]);
 return (
    <div className="min-h-screen bg-orange-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-14">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold flex gap-2">
            <FaFirstOrder /> My Orders
          </h1>

          <p className="mt-3 text-orange-100 max-w-xl">
            Track every purchase, monitor delivery progress,
            cancel eligible orders and view complete order details.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 py-10">

        {/* Filters */}

        <div className="bg-white rounded-xl shadow p-5 mb-8">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Search by product..."
              className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All</option>
              <option>Pending</option>
              <option>Accepted</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>

          </div>
        </div>

        {/* Count */}

        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Total Orders ({filteredOrders.length})
          </h2>
        </div>

        {/* Cards */}

        <div className="grid gap-6">

          {filteredOrders.map((order) => (
            <OrderCard
              key={order._id}
              order={order}
            />
          ))}

          {filteredOrders.length === 0 && (
            <div className="bg-white rounded-xl p-12 text-center shadow">

              <div className="text-6xl">
                📦
              </div>

              <h2 className="font-bold text-2xl mt-5">
                No Orders Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try changing your search or filter.
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}