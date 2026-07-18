import { FiSearch } from "react-icons/fi";

const CategoriesHeader = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-300 to-orange-600 py-20">

      {/* Background Circles */}

      <div className="absolute -left-16 -top-16 h-60 w-60 rounded-full bg-white/10"></div>

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">

        <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
          Explore Categories
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Browse Job Categories
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-orange-100 text-lg leading-8">
          Find the perfect career by exploring jobs across different
          industries and professions.
        </p>


        

      </div>
    </section>
  );
};

export default CategoriesHeader;