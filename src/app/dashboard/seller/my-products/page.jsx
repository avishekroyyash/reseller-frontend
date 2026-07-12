import ProductList from "./ProductList";
import { getProductBySellerId } from "@/lib/apiGetCall/SellProductById";
import { getUserData } from "@/lib/mainFunction/session";

export default async function MyProductPage() {
  const user = await getUserData();

  const products = await getProductBySellerId(user?.id);

  return <ProductList products={products} />;
}