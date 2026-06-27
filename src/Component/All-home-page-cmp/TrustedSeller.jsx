"use client";

import Image from "next/image";
import {
  FaStar,
  FaCheckCircle,
  FaBoxOpen,
  FaShoppingBag,
  FaUsers,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

const sellers = [
  {
    id: 1,
    name: "TechZone Store",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
    rating: 4.9,
    reviews: 1250,
    products: 320,
    sales: "5.8K",
    followers: "2.4K",
    response: "10 min",
  },
  {
    id: 2,
    name: "Fashion Hub",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    rating: 4.8,
    reviews: 980,
    products: 210,
    sales: "4.3K",
    followers: "1.9K",
    response: "15 min",
  },
  {
    id: 3,
    name: "Home Essentials",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    rating: 5.0,
    reviews: 1540,
    products: 470,
    sales: "8.2K",
    followers: "3.6K",
    response: "8 min",
  },
];

export default function TrustedSellers() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
            Trusted Sellers
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-5">
            Meet Our Top Rated Sellers
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 text-lg">
            Buy confidently from verified sellers with outstanding ratings,
            fast responses, and thousands of successful transactions.
          </p>

        </div>

        {/* Sellers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="group bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Cover */}
              <div className="h-28 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

              {/* Avatar */}
              <div className="relative flex justify-center -mt-14">
                <Image
                  src={seller.image}
                  width={110}
                  height={110}
                  alt={seller.name}
                  className="rounded-full border-4 border-white object-cover w-28 h-28"
                />
              </div>

              <div className="p-6">

                {/* Name */}
                <div className="flex justify-center items-center gap-2">

                  <h3 className="text-2xl font-bold text-gray-900">
                    {seller.name}
                  </h3>

                  <FaCheckCircle className="text-orange-500" />

                </div>

                {/* Rating */}
                <div className="flex justify-center items-center gap-2 mt-3">

                  <FaStar className="text-yellow-400" />

                  <span className="font-semibold">
                    {seller.rating}
                  </span>

                  <span className="text-gray-500">
                    ({seller.reviews} Reviews)
                  </span>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <FaBoxOpen className="mx-auto text-orange-500 text-xl mb-2" />
                    <p className="font-bold">{seller.products}</p>
                    <span className="text-sm text-gray-500">
                      Products
                    </span>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <FaShoppingBag className="mx-auto text-orange-500 text-xl mb-2" />
                    <p className="font-bold">{seller.sales}</p>
                    <span className="text-sm text-gray-500">
                      Sales
                    </span>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <FaUsers className="mx-auto text-orange-500 text-xl mb-2" />
                    <p className="font-bold">{seller.followers}</p>
                    <span className="text-sm text-gray-500">
                      Followers
                    </span>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <FaBolt className="mx-auto text-orange-500 text-xl mb-2" />
                    <p className="font-bold">{seller.response}</p>
                    <span className="text-sm text-gray-500">
                      Response
                    </span>
                  </div>

                </div>

                {/* Button */}
                <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                  Visit Store
                  <FaArrowRight />
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>
            <h3 className="text-3xl font-bold text-white">
              Become a Trusted Seller
            </h3>

            <p className="text-orange-100 mt-3 max-w-2xl">
              Build your reputation, reach thousands of buyers, and grow your
              business with ReBazar.
            </p>
          </div>

          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-100 transition">
            Start Selling
          </button>

        </div>

      </div>
    </section>
  );
}