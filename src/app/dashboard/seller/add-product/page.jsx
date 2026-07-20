import AddProductContent from "@/Component/seller-componet/AddProductContent";
import { getUserData } from "@/lib/mainFunction/session";


export default async function AddProductPage() {
  const user = await getUserData();

  return <AddProductContent user={user} />;
}