"use client";

import { FiDatabase } from "react-icons/fi";

export default function EmptyState() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">

      <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-12 text-center">

        <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mx-auto">

          <FiDatabase className="text-5xl text-orange-500"/>

        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">

          No Dashboard Data

        </h2>

        <p className="text-gray-500 mt-3 max-w-md">

          There is currently no data available for your marketplace.
          Once users, products and orders are added, they will appear here.

        </p>

      </div>

    </div>
  );
}