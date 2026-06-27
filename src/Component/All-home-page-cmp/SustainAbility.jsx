"use client";

import {
  FaRecycle,
  FaLeaf,
  FaGlobeAsia,
  FaSeedling,
  FaArrowRight,
} from "react-icons/fa";

const impacts = [
  {
    id: 1,
    icon: FaRecycle,
    title: "Reduce Waste",
    description:
      "Every reused product helps reduce landfill waste and gives valuable items a second life.",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 2,
    icon: FaLeaf,
    title: "Lower Carbon Footprint",
    description:
      "Buying second-hand reduces manufacturing demand and lowers carbon emissions.",
    color: "from-green-500 to-orange-500",
  },
  {
    id: 3,
    icon: FaGlobeAsia,
    title: "Protect Natural Resources",
    description:
      "Reusing products saves raw materials, water, and energy that would be used to create new ones.",
    color: "from-orange-500 to-yellow-500",
  },
];

const stats = [
  {
    value: "150K+",
    label: "Products Reused",
  },
  {
    value: "95 Tons",
    label: "Waste Reduced",
  },
  {
    value: "35K+",
    label: "Trees Protected",
  },
  {
    value: "120 Tons",
    label: "CO₂ Emissions Saved",
  },
];

export default function SustainabilityImpact() {
  return (
    <section className="bg-linear-to-b from-orange-50 to-white py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold text-sm">
            Sustainability Impact
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold text-gray-900">
            Every Purchase Makes a Difference
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
            By choosing second-hand products on ReBazar, you're helping reduce
            waste, conserve natural resources, and create a more sustainable
            future.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {impacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl p-8 border border-orange-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-linear-to-r ${item.color} flex items-center justify-center text-white text-4xl shadow-lg group-hover:scale-110 transition`}
                >
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics Banner */}
        <div className="mt-20 bg-linear-to-r from-orange-500 to-orange-600 rounded-3xl p-10 lg:p-14">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            {stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-extrabold text-white">
                  {item.value}
                </h3>

                <p className="text-orange-100 mt-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-white border border-orange-100 shadow-lg p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>
            <div className="flex items-center gap-3 text-orange-500 mb-4">
              <FaSeedling className="text-3xl" />
              <h3 className="text-3xl font-bold text-gray-900">
                Shop Smarter. Save the Planet.
              </h3>
            </div>

            <p className="text-gray-600 max-w-2xl leading-7">
              Every reused product means fewer resources consumed and less waste
              sent to landfills. Join thousands of users building a greener
              future through ReBazar.
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition shadow-lg">
            Start Buying Sustainably
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}