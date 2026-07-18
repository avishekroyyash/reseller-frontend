import CategoryCard from "./CategoryCard";



const CategoryGrid = ({ categories }) => {
  return (
    <section className="pb-20">

      <div className="mb-10">

        <h2 className="text-3xl font-bold text-gray-800">
          Popular Categories
        </h2>

        <p className="text-gray-500 mt-2">
          Explore jobs from different industries.
        </p>

      </div>

      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 "
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.category}
            category={category}
          />
        ))}
      </div>

    </section>
  );
};

export default CategoryGrid;