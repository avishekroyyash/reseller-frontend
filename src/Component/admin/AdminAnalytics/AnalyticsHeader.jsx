"use client";

import { FiBarChart2, FiDownload, FiRefreshCw } from "react-icons/fi";

export default function AnalyticsHeader() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 mb-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        {/* Left */}

        <div className="flex items-start gap-4">

          <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

            <FiBarChart2 className="text-orange-500 text-3xl" />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-gray-800">
              Platform Analytics
            </h1>

            <p className="text-gray-500 mt-1">
              Monitor marketplace growth, users, orders and category performance.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-3">

          <button
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl transition"
          >
            <FiRefreshCw />

            Refresh
          </button>

          <button
            className="flex items-center gap-2 border border-orange-300 hover:bg-orange-50 text-orange-600 px-5 py-3 rounded-xl transition"
          >
            <FiDownload />

            Export Report
          </button>

        </div>

      </div>

    </div>
  );
}