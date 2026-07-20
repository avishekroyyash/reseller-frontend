import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { GetAllProducts } from "@/lib/apiGetCall/GetAllProducts";
import ProductCard from "../ProductsComponent/ProductCard";

const Sixjob = async () => {
  const data = await GetAllProducts();
  const jobs = data.products || [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-colors duration-300">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Featured Jobs
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Latest Job Opportunities
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
            Explore the newest job opportunities from trusted employers.
            Find the perfect role that matches your skills and career goals.
          </p>
        </div>

        <Link
          href="/all-products"
          className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-700 dark:hover:text-orange-300 transition"
        >
          View More Jobs
          <FiArrowRight className="text-lg" />
        </Link>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {jobs.slice(0, 6).map((job) => (
          <ProductCard
            key={job._id}
            product={job}
          />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/all-products"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View All Jobs
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Sixjob;