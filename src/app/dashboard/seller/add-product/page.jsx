import { getUserData } from "@/lib/mainFunction/session";
import AddProductForm from "./AddProductForm";


export default async function AddProductPage() {
  const user = await getUserData()
  //console.log(user,'USER')
  return (
    <div className="min-h-screen bg-orange-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Add Product
          </h1>

          <p className="text-gray-500 mt-2">
            Create a new product listing for your store.
          </p>
        </div>

        {/* Client Component */}
        <AddProductForm user={user} />
      </div>
    </div>
  );
}