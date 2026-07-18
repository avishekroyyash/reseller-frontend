import Link from "next/link";

import {
  FiArrowRight,
  FiCode,
  FiTrendingUp,
  FiBook,
  FiHeart,
  FiShoppingBag,
  FiUsers,
  FiTruck,
  FiDollarSign,
  FiCpu,
  FiBriefcase,
} from "react-icons/fi";

const iconMap = {
  IT: FiCode,
  Software: FiCpu,
  Marketing: FiTrendingUp,
  Finance: FiDollarSign,
  Education: FiBook,
  Healthcare: FiHeart,
  Sales: FiShoppingBag,
  HR: FiUsers,
  Logistics: FiTruck,
};

const CategoryCard = ({ category }) => {

  const Icon =
    iconMap[category.category] || FiBriefcase;

  return (
    <Link
      href={`/all-products?category=${encodeURIComponent(
        category.category
      )}`}
    >
      <div
        className="
        group
        bg-white
        rounded-3xl
        p-8
        border
        border-gray-100
        shadow-sm
        hover:shadow-xl
        hover:border-orange-300
        duration-300
        hover:-translate-y-2
        cursor-pointer
      "
      >
        {/* Icon */}

        <div
          className="
          h-20
          w-20
          rounded-2xl
          bg-orange-100
          flex
          items-center
          justify-center
          group-hover:bg-orange-500
          duration-300
        "
        >
          <Icon
            className="
            text-4xl
            text-orange-500
            group-hover:text-white
            duration-300
          "
          />
        </div>

        {/* Name */}

        <h3
          className="
          mt-8
          text-2xl
          font-bold
          text-gray-800
        "
        >
          {category.category}
        </h3>

        {/* Job Count */}

        <p className="mt-3 text-gray-500">

          {category.totalJobs} Jobs Available

        </p>

        {/* Button */}

        <div
          className="
          mt-8
          flex
          items-center
          justify-between
        "
        >
          <span
            className="
            text-orange-500
            font-semibold
          "
          >
            Explore Jobs
          </span>

          <FiArrowRight
            className="
            text-xl
            text-orange-500
            group-hover:translate-x-2
            duration-300
          "
          />
        </div>

      </div>
    </Link>
  );
};

export default CategoryCard;