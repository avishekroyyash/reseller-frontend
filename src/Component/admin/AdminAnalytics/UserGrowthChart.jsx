"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { FiTrendingUp } from "react-icons/fi";

export default function UserGrowthChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">

          <FiTrendingUp className="text-orange-500 text-2xl" />

        </div>

        <div>

          <h2 className="text-xl font-bold text-gray-800">
            User Growth
          </h2>

          <p className="text-sm text-gray-500">
            Monthly registered users
          </p>

        </div>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#f97316"
              strokeWidth={4}
              dot={{
                r: 5,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}