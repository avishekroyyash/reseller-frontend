import Link from "next/link";
import {
  FiShoppingBag,
  FiShield,
  FiDollarSign,
  FiUsers,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function AboutReseller() {
  const features = [
    {
      icon: FiUsers,
      title: "Trusted Sellers",
      description:
        "Connect with verified sellers offering quality new and pre-owned products.",
    },
    {
      icon: FiDollarSign,
      title: "Affordable Prices",
      description:
        "Compare prices from multiple sellers and find the best deals that fit your budget.",
    },
    {
      icon: FiShield,
      title: "Secure Shopping",
      description:
        "Enjoy a safe marketplace with trusted transactions and reliable customer support.",
    },
    {
      icon: FiShoppingBag,
      title: "Wide Product Selection",
      description:
        "Explore thousands of products across electronics, fashion, books, vehicles, home essentials, and more.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              About Our Marketplace
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Buy & Sell with Confidence on Our
              <span className="text-orange-500"> Reseller Marketplace</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              Our reseller marketplace connects buyers with trusted sellers,
              making it easy to discover quality products at competitive prices.
              Whether you're shopping for electronics, fashion, books, home
              essentials, or vehicles, you'll find a wide selection from
              verified sellers all in one place.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 text-orange-500 text-xl" />
                <p className="text-gray-600">
                  Thousands of quality products across multiple categories.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 text-orange-500 text-xl" />
                <p className="text-gray-600">
                  Verified sellers offering trusted products and services.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 text-orange-500 text-xl" />
                <p className="text-gray-600">
                  Easy product discovery with category-based browsing.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 text-orange-500 text-xl" />
                <p className="text-gray-600">
                  Secure shopping experience with transparent pricing.
                </p>
              </div>

            </div>

            <Link
              href="/all-products"
              className="inline-flex items-center gap-2 mt-10 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600 shadow-lg hover:shadow-xl"
            >
              Explore Products
              <FiArrowRight />
            </Link>

          </div>

          {/* Right Features */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md group-hover:bg-orange-500 transition">
                    <Icon className="text-3xl text-orange-500 group-hover:text-white transition" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}