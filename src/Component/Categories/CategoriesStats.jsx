import { FiGrid, FiBriefcase } from "react-icons/fi";

const CategoriesStats = ({ totalCategories, totalJobs }) => {
  return (
    <section className="mt-12 relative z-10 mb-14 ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Total Categories */}

        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Total Categories
              </p>

              <h2 className="mt-2 text-4xl font-bold text-gray-800">
                {totalCategories}
              </h2>

            </div>

            <div className="h-16 w-16 rounded-xl bg-orange-100 flex items-center justify-center">

              <FiGrid className="text-3xl text-orange-500" />

            </div>

          </div>

        </div>

        {/* Total Jobs */}

        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Total Jobs
              </p>

              <h2 className="mt-2 text-4xl font-bold text-gray-800">
                {totalJobs}
              </h2>

            </div>

            <div className="h-16 w-16 rounded-xl bg-orange-100 flex items-center justify-center">

              <FiBriefcase className="text-3xl text-orange-500" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CategoriesStats;