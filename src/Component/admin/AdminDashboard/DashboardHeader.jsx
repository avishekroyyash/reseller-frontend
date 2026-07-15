"use client";

import { FiRefreshCw, FiShield } from "react-icons/fi";

export default function DashboardHeader({ onRefresh }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white border border-orange-100 rounded-2xl shadow-sm p-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">

            <FiShield className="text-3xl text-orange-500" />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome back! Here's an overview of your marketplace.
            </p>

            <p className="text-sm text-gray-400 mt-2">
              {today}
            </p>

          </div>

        </div>

        {/* Right */}

        <button
          onClick={onRefresh}
          className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition duration-300 shadow"
        >
          <FiRefreshCw className="text-lg" />

          Refresh Dashboard
        </button>

      </div>

    </div>
  );
}