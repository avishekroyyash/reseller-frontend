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
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Sales Analytics
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor your monthly sales and best-performing products.
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            $18,240
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            684
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Products Sold</p>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            1290
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Average Order</p>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            $26.6
          </h2>
        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Monthly Trend */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-6">
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

        </div>

        {/* Product Sales */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-6">
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
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">

        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">
            Top Selling Products
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-orange-50">

              <tr>

                <th className="text-left p-4">
                  Product
                </th>

                <th className="text-center p-4">
                  Units Sold
                </th>

                <th className="text-right p-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {topProducts.map((item, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="p-4 font-medium">
                    {item.name}
                  </td>

                  <td className="text-center p-4">
                    {item.sold}
                  </td>

                  <td className="text-right p-4">

                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">

                      Top Seller

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}