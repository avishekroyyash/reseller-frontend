"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { FiGrid } from "react-icons/fi";

export default function CategoryPerformanceChart({ data }) {
  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
          <FiGrid className="text-2xl text-orange-500" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Category Performance
          </h2>

          <p className="text-sm text-gray-500">
            Total sales by category
          </p>
        </div>

      </div>

      {/* Chart */}

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis type="number" />

            <YAxis
              dataKey="category"
              type="category"
              width={90}
            />

            <Tooltip />

            <Bar
              dataKey="sales"
              fill="#f97316"
              radius={[0, 10, 10, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}