"use client";

import Image from "next/image";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaUserCheck,
} from "react-icons/fa";

const stories = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Verified Buyer",
    badge: "Buyer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    story:
      "I bought a refurbished laptop through ReBazar and saved over 40%. The seller was trustworthy, and delivery was fast. Highly recommended!",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    role: "Top Seller",
    badge: "Seller",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    story:
      "ReBazar helped me turn my unused electronics into extra income. I've completed more than 300 successful sales with excellent customer feedback.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Verified Buyer",
    badge: "Buyer",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    story:
      "The platform made it easy to compare prices and communicate with sellers. I found exactly what I needed within minutes.",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-linear-to-b from-orange-50 to-white py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-full text-sm">
            Success Stories
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-5">
            Buyers & Sellers Love ReBazar
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg">
            Thousands of people trust ReBazar to buy and sell quality
            second-hand products safely and easily.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-orange-100 hover:-translate-y-2"
            >
              {/* Quote */}
              <FaQuoteLeft className="text-4xl text-orange-200 mb-5" />

              {/* Story */}
              <p className="text-gray-600 leading-7 mb-8">
                {story.story}
              </p>

              {/* Rating */}
              <div className="flex gap-1 text-orange-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-4">
                
                <Image  className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                  src={story.image} alt={story.name} width={50} height={50}></Image>

                {/* <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                /> */}

                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {story.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {story.role}
                  </p>

                  <span className="inline-block mt-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {story.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-orange-500 rounded-3xl p-10 lg:p-14">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">

            <div>
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="mt-2 opacity-90">
                Happy Buyers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">12K+</h3>
              <p className="mt-2 opacity-90">
                Active Sellers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">150K+</h3>
              <p className="mt-2 opacity-90">
                Products Sold
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="mt-2 opacity-90">
                Positive Reviews
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
            <FaUserCheck />
            Join Our Success Story
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}