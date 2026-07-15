"use client";

import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiPackage,
  FiShoppingBag,
  FiGrid,
} from "react-icons/fi";

const cards = [
  {
    key: "users",
    title: "Total Users",
    icon: FiUsers,
    prefix: "",
  },
  {
    key: "orders",
    title: "Total Orders",
    icon: FiShoppingCart,
    prefix: "",
  },
  {
    key: "revenue",
    title: "Total Revenue",
    icon: FiDollarSign,
    prefix: "$",
  },
  {
    key: "products",
    title: "Products",
    icon: FiPackage,
    prefix: "",
  },
  {
    key: "sellers",
    title: "Sellers",
    icon: FiShoppingBag,
    prefix: "",
  },
  {
    key: "categories",
    title: "Categories",
    icon: FiGrid,
    prefix: "",
  },
];

export default function AnalyticsCards({ summary }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className="group bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Orange Top Border */}
            <div className="h-1 bg-orange-500"></div>

            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                  <Icon className="text-2xl text-orange-500 group-hover:text-white transition" />
                </div>

                <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">
                  Live
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-gray-500 text-sm font-medium">
                  {card.title}
                </h3>

                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {card.prefix}
                  {summary[card.key].toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}