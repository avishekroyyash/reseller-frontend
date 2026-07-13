"use client";

import OrderStatusCard from "./OrderStatusCard";

export default function OrderAnalytics({ dashboard }) {

  const total =
    dashboard?.totalOrders || 1;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Order Status Overview
      </h2>

      <div className="space-y-6">

        <OrderStatusCard
          title="Accepted"
          value={dashboard.acceptedOrders}
          percentage={(dashboard.acceptedOrders / total) * 100}
          color="bg-blue-500"
        />

        <OrderStatusCard
          title="Processing"
          value={dashboard.processingOrders}
          percentage={(dashboard.processingOrders / total) * 100}
          color="bg-orange-500"
        />

        <OrderStatusCard
          title="Shipped"
          value={dashboard.shippedOrders}
          percentage={(dashboard.shippedOrders / total) * 100}
          color="bg-purple-500"
        />

        <OrderStatusCard
          title="Delivered"
          value={dashboard.deliveredOrders}
          percentage={(dashboard.deliveredOrders / total) * 100}
          color="bg-green-500"
        />

        <OrderStatusCard
          title="Rejected"
          value={dashboard.rejectedOrders}
          percentage={(dashboard.rejectedOrders / total) * 100}
          color="bg-red-500"
        />

      </div>

    </div>
  );
}