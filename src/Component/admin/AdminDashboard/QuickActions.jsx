"use client";

import Link from "next/link";

import {
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiBarChart2,
  FiArrowRight,
} from "react-icons/fi";

const actions = [
  {
    title: "Manage Users",
    description: "View, block, activate and manage marketplace users.",
    href: "/dashboard/admin/users",
    icon: FiUsers,
  },
  {
    title: "Manage Products",
    description: "Approve, reject and manage all products.",
    href: "/dashboard/admin/products",
    icon: FiPackage,
  },
  {
    title: "Manage Orders",
    description: "Track every marketplace order and resolve disputes.",
    href: "/dashboard/admin/orders",
    icon: FiShoppingCart,
  },
  {
    title: "Platform Analytics",
    description: "View users, orders, categories and business growth.",
    href: "/dashboard/admin/analysis",
    icon: FiBarChart2,
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white border border-orange-100 rounded-2xl shadow-sm p-6">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Quick Actions
        </h2>

        <p className="text-gray-500 mt-1">
          Quickly access the most important administration pages.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group border border-orange-100 rounded-2xl p-6 hover:bg-orange-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-between items-start">

                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:bg-white transition">

                  <Icon className="text-2xl text-orange-500" />

                </div>

                <FiArrowRight className="text-orange-400 group-hover:text-white text-xl transition" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-800 group-hover:text-white transition">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 group-hover:text-orange-100 transition">
                {item.description}
              </p>

            </Link>
          );
        })}

      </div>

    </div>
  );
}