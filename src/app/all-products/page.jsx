import ProductCard from "@/Component/ProductsComponent/ProductCard";
import ProductPagination from "@/Component/ProductsComponent/ProductPagination";
import ProductSearchFilter from "@/Component/ProductsComponent/ProductSearch";
import { GetAllProducts } from "@/lib/apiGetCall/GetAllProducts";

export default async function AllProductPage({ searchParams }) {
  const params = await searchParams;

  const query = new URLSearchParams();

  query.set("page", params.page || "1");
  query.set("limit", "12");

  if (params.search) query.set("search", params.search);
  if (params.category) query.set("category", params.category);
  if (params.condition) query.set("condition", params.condition);
  if (params.sort) query.set("sort", params.sort);

  const data = await GetAllProducts(`?${query.toString()}`);

  const {
    products = [],
    totalPages = 1,
    currentPage = 1,
    totalProducts = 0,
  } = data;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Search */}
        <ProductSearchFilter />

        {/* Product Count */}
        <div className="my-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            All Products
          </h2>

          <p className="rounded-full bg-orange-100 dark:bg-orange-900/30 px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-300">
            {totalProducts} Products Found
          </p>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-5
              sm:gap-6
            "
          >
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="my-20 rounded-3xl border border-dashed border-orange-300 dark:border-orange-700 bg-white dark:bg-gray-900 p-12 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              No Products Found
            </h3>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Try changing your search, filter or category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {products.length > 0 && (
          <div className="mt-10 flex justify-center">
            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalProducts={totalProducts}
            />
          </div>
        )}
      </div>
    </main>
  );
}