"use client";

import {
  HiOutlineCube,
  HiOutlineShoppingBag,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
} from "react-icons/hi";

import StatCard from "./StatCard";

export default function DashboardCards({ dashboard }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

      {/* Total Products */}
      <StatCard
        title="Total Products"
        value={dashboard?.totalProducts ?? 0}
        description="Products listed in your store"
        icon={<HiOutlineCube />}
      />

      {/* Total Sales */}
      <StatCard
        title="Total Sales"
        value={dashboard?.deliveredOrders ?? 0}
        description="Completed customer orders"
        icon={<HiOutlineShoppingBag />}
      />

      {/* Revenue */}
      <StatCard
        title="Total Revenue"
        value={`$${dashboard?.totalRevenue ?? 0}`}
        description="Revenue from completed orders"
        icon={<HiOutlineCurrencyDollar />}
      />

      {/* Pending */}
      <StatCard
        title="Pending Orders"
        value={dashboard?.pendingOrders ?? 0}
        description="Orders waiting for your action"
        icon={<HiOutlineClock />}
      />
    </div>
  );
}