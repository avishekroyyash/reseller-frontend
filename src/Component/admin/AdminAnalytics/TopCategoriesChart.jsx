"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

import { FiPieChart } from "react-icons/fi";

const COLORS = [
  "#f97316",
  "#fb923c",
  "#fdba74",
  "#fed7aa",
];

export default function TopCategoriesChart({ data }) {
  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
          <FiPieChart className="text-2xl text-orange-500" />
        </div>

        <div>

          <h2 className="text-xl font-bold text-gray-800">
            Top Categories
          </h2>

          <p className="text-sm text-gray-500">
            Sales distribution by category
          </p>

        </div>

      </div>

      {/* Chart */}

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}