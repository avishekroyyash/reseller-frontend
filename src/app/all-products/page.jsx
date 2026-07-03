import ProductCard from "@/Component/ProductsComponent/ProductCard";
import ProductSearchFilter from "@/Component/ProductsComponent/ProductSearch";
import { GetAllProducts } from "@/lib/apiGetCall/GetAllProducts";

export default async function AllProductPage({ searchParams }) {
   const paramsObj = await searchParams;

  const params = new URLSearchParams();

  if (paramsObj.search) {
    params.append("search", paramsObj.search);
  }

  if (paramsObj.category) {
    params.append("category", paramsObj.category);
  }

  if (paramsObj.condition) {
    params.append("condition", paramsObj.condition);
  }

  if (paramsObj.sort) {
    params.append("sort", paramsObj.sort);
  }

  const products = await GetAllProducts(
    params.toString() ? `?${params.toString()}` : ""
  );


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <ProductSearchFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}