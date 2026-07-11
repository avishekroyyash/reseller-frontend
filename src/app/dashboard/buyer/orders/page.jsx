"use client";

import OrderCard from "@/Component/BuyerOrder/OrderCard";
import { useMemo, useState } from "react";


export default function MyOrdersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  // Replace with your API response later
  const orders = [
    {
      _id: "1",
      product: {
        title: "Apple iPhone 15 Pro",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
        price: 1200,
      },
      seller: {
        name: "Raj Roy",
      },
      paymentStatus: "Paid",
      orderStatus: "Pending",
      createdAt: "11 July 2026",
    },
    {
      _id: "2",
      product: {
        title: "MacBook Air M3",
        image:
          "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600",
        price: 1800,
      },
      seller: {
        name: "John Doe",
      },
      paymentStatus: "Paid",
      orderStatus: "Accepted",
      createdAt: "10 July 2026",
    },
    {
      _id: "3",
      product: {
        title: "Sony Headphone",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        price: 180,
      },
      seller: {
        name: "Alex",
      },
      paymentStatus: "Paid",
      orderStatus: "Cancelled",
      createdAt: "8 July 2026",
    },
  ];

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchSearch = order.product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        status === "All" || order.orderStatus === status;

      return matchSearch && matchStatus;
    });
  }, [search, status]);

  return (
    <div className="min-h-screen bg-orange-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-14">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold">
            📦 My Orders
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