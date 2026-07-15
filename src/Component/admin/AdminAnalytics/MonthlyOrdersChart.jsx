"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { FiShoppingCart } from "react-icons/fi";

export default function MonthlyOrdersChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">

          <FiShoppingCart className="text-orange-500 text-2xl" />

        </div>

        <div>

          <h2 className="text-xl font-bold text-gray-800">
            Monthly Orders
          </h2>

          <p className="text-sm text-gray-500">
            Orders received each month
          </p>

        </div>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="orders"
              fill="#f97316"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}