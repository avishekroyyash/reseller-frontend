"use client";

import {
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiDollarSign,
} from "react-icons/fi";

const cards = [
  {
    key: "totalUsers",
    title: "Total Users",
    icon: FiUsers,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    key: "totalProducts",
    title: "Total Products",
    icon: FiPackage,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    key: "totalOrders",
    title: "Total Orders",
    icon: FiShoppingCart,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    key: "totalRevenue",
    title: "Total Revenue",
    icon: FiDollarSign,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    prefix: "$",
  },
];

export default function DashboardCards({ dashboard }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className="bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
          >
            {/* Top Border */}
            <div className="h-1 bg-orange-500"></div>

            <div className="p-6">
              <div className="flex items-center justify-between">

                <div
                  className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center group-hover:bg-orange-500 transition`}
                >
                  <Icon
                    className={`text-2xl ${card.iconColor} group-hover:text-white transition`}
                  />
                </div>

                <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Live
                </span>

              </div>

              <div className="mt-6">

                <h3 className="text-gray-500 text-sm font-medium">
                  {card.title}
                </h3>

                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {card.prefix || ""}
                  {Number(dashboard[card.key]).toLocaleString()}
                </p>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}