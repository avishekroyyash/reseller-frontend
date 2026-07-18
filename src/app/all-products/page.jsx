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
    products,
    totalPages,
    currentPage,
    totalProducts,
  } = data;
  // console.log(data,'DATA FOR MY-PAGE');
  return (
    <>
      <ProductSearchFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalProducts={totalProducts}
      />
    </>
  );
}