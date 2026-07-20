"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
const monthlySales = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1800 },
  { month: "Mar", sales: 2400 },
  { month: "Apr", sales: 3000 },
  { month: "May", sales: 4200 },
  { month: "Jun", sales: 5200 },
  { month: "Jul", sales: 6100 },
];

const topProducts = [
  { name: "Wireless Headphone", sold: 180 },
  { name: "Gaming Mouse", sold: 145 },
  { name: "Mechanical Keyboard", sold: 120 },
  { name: "Smart Watch", sold: 110 },
  { name: "USB Hub", sold: 90 },
];

export default function SalesAnalytics() {
  return (
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="min-h-screen bg-gray-50 p-4 transition-colors duration-300 dark:bg-gray-950 md:p-6"
>
  {/* Header */}

  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 }}
    className="mb-8"
  >
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
      Sales Analytics
    </h1>

    <p className="mt-2 text-gray-500 dark:text-gray-400">
      Monitor your monthly sales and best-performing products.
    </p>
  </motion.div>

  {/* Summary Cards */}

  <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
    {[
      {
        title: "Total Revenue",
        value: "$18,240",
      },
      {
        title: "Orders",
        value: "684",
      },
      {
        title: "Products Sold",
        value: "1290",
      },
      {
        title: "Average Order",
        value: "$26.6",
      },
    ].map((card, index) => (
      <motion.div
        key={card.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
      >
        <p className="text-gray-500 dark:text-gray-400">
          {card.title}
        </p>

        <h2 className="mt-3 text-3xl font-bold text-orange-500">
          {card.value}
        </h2>
      </motion.div>
    ))}
  </div>

  {/* Charts */}

  <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
    {/* Monthly Sales */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
    >
      <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
        Monthly Sales Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlySales}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#f97316"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>

    {/* Product Chart */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
    >
      <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
        Top Selling Products
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topProducts}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" hide />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="sold"
              fill="#f97316"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  </div>

  {/* Table */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="mt-8 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
  >
    <div className="border-b border-orange-100 p-6 dark:border-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Top Selling Products
      </h2>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-orange-50 dark:bg-gray-800">
          <tr>
            <th className="p-4 text-left text-gray-700 dark:text-gray-300">
              Product
            </th>

            <th className="p-4 text-center text-gray-700 dark:text-gray-300">
              Units Sold
            </th>

            <th className="p-4 text-right text-gray-700 dark:text-gray-300">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {topProducts.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-orange-100 transition hover:bg-orange-50 dark:border-gray-800 dark:hover:bg-gray-800"
            >
              <td className="p-4 font-medium text-gray-900 dark:text-white">
                {item.name}
              </td>

              <td className="p-4 text-center text-gray-700 dark:text-gray-300">
                {item.sold}
              </td>

              <td className="p-4 text-right">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                  Top Seller
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
</motion.div>
  );
}