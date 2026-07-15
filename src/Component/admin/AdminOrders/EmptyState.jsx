"use client";

import { FiPackage } from "react-icons/fi";

export default function EmptyState() {
  return (
    <div className="bg-white rounded-2xl shadow border border-orange-100 py-20">

      <div className="flex flex-col items-center">

        <div className="bg-orange-100 p-6 rounded-full">

          <FiPackage
            size={60}
            className="text-orange-500"
          />

        </div>

        <h2 className="text-2xl font-bold mt-6">
          No Orders Found
        </h2>

        <p className="text-gray-500 mt-2">
          There are no orders matching your search or filters.
        </p>

      </div>

    </div>
  );
}