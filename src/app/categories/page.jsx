import CategoriesPage from "@/Component/Categories/CategoriesPage";
import { GetAllCategories } from "@/lib/apiGetCall/GetAllCategories";


export default async function Page() {
  const categories = await GetAllCategories();

  return <CategoriesPage categories={categories} />;
}