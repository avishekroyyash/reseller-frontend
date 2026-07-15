"use client";

import {
  FiSearch,
  FiFilter,
  FiCreditCard,
  FiArrowDown 
} from "react-icons/fi";

export default function OrderToolbar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  paymentFilter,
  setPaymentFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-white rounded-2xl shadow border border-orange-100 p-5">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Search */}

        <div className="relative">

          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search product, buyer, seller..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
          />

        </div>

        {/* Status */}

        <div className="relative">

          <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full appearance-none pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>

        </div>

        {/* Payment */}

        <div className="relative">

          <FiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="w-full appearance-none pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
          >
            <option value="all">All Payments</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>

        </div>

        {/* Sort */}

        <div className="relative">

          < FiArrowDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

        </div>

      </div>
    </div>
  );
}