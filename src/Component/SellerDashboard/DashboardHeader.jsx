"use client";

import { HiOutlineChartBar } from "react-icons/hi";

export default function DashboardHeader() {
  return (
    <div className="mb-10">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-xl bg-orange-500 text-white flex items-center justify-center">

          <HiOutlineChartBar className="text-3xl" />

        </div>

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Seller Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Track your store performance and sales statistics.
          </p>

        </div>

      </div>

    </div>
  );
}