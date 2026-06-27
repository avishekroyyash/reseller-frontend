"use client";

import {
  FaBoxOpen,
  FaStore,
  FaUsers,
  FaShoppingBag,
} from "react-icons/fa";

const statistics = [
  {
    id: 1,
    title: "Total Products",
    value: "150K+",
    icon: FaBoxOpen,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
  },
  {
    id: 2,
    title: "Total Sellers",
    value: "12K+",
    icon: FaStore,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    id: 3,
    title: "Total Buyers",
    value: "75K+",
    icon: FaUsers,
    color: "from-orange-600 to-red-500",
    bg: "bg-orange-50",
  },
  {
    id: 4,
    title: "Completed Orders",
    value: "320K+",
    icon: FaShoppingBag,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50",
  },
];

export default function MarketplaceStatistics() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
            Marketplace Statistics
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
            ReBazar in Numbers
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
            Our growing marketplace connects thousands of buyers and sellers,
            making second-hand shopping easier, safer, and more reliable every
            day.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`${item.bg} group rounded-3xl border border-orange-100 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Icon */}
                <div
                  className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-4xl shadow-lg group-hover:scale-110 transition`}
                >
                  <Icon />
                </div>

                {/* Number */}
                <h3 className="mt-6 text-4xl font-extrabold text-gray-900">
                  {item.value}
                </h3>

                {/* Title */}
                <p className="mt-2 text-gray-600 font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-10 lg:px-14 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-3xl font-bold text-white">
              Join the Fastest Growing Reseller Marketplace
            </h3>

            <p className="text-orange-100 mt-3 max-w-2xl">
              Buy quality second-hand products, sell unused items, and become
              part of a trusted marketplace with thousands of successful
              transactions every day.
            </p>
          </div>

          <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-100 transition duration-300 shadow-lg">
            Start Buying & Selling
          </button>

        </div>

      </div>
    </section>
  );
}