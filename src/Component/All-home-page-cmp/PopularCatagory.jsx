"use client";

import {
  FaLaptop,
  FaCouch,
  FaCar,
  FaTshirt,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: FaLaptop,
    items: "1,250+ Products",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 2,
    name: "Furniture",
    icon: FaCouch,
    items: "890+ Products",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    name: "Vehicles",
    icon: FaCar,
    items: "420+ Products",
    color: "from-orange-600 to-red-500",
  },
  {
    id: 4,
    name: "Fashion",
    icon: FaTshirt,
    items: "2,100+ Products",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    name: "Mobile Phones",
    icon: FaMobileAlt,
    items: "1,580+ Products",
    color: "from-orange-500 to-amber-600",
  },
];

export default function PopularCategories() {
  return (
    <section className="bg-orange-50 dark:bg-gray-900 transition-colors duration-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 font-semibold text-sm">
            Browse Categories
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Popular Categories
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore thousands of products across our most popular categories.
            Find amazing deals from trusted resellers.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-orange-100 dark:border-gray-700 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto text-white text-3xl group-hover:rotate-6 transition`}
                >
                  <Icon />
                </div>

                {/* Name */}
                <h3 className="mt-5 text-lg font-bold text-center text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                  {category.name}
                </h3>

                {/* Products */}
                <p className="text-center text-gray-500 dark:text-gray-300 text-sm mt-2">
                  {category.items}
                </p>

                {/* Button */}
                <div className="mt-5 flex justify-center">
                  <button className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold group-hover:gap-3 transition-all">
                    Browse
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300">
            Browse All Categories
          </button>
        </div>
      </div>
    </section>
  );
}