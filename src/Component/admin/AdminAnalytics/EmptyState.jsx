"use client";

import { FiBarChart2 } from "react-icons/fi";

export default function EmptyState() {
  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm py-20">

      <div className="flex flex-col items-center">

        <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">

          <FiBarChart2 className="text-5xl text-orange-500" />

        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">
          No Analytics Available
        </h2>

        <p className="text-gray-500 mt-2 text-center max-w-md">
          There is currently no analytics data to display.
        </p>

      </div>

    </div>
  );
}