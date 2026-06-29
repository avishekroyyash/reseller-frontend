import { getProductBySellerId } from '@/lib/apiGetCall/SellProductById';
import { getUserData } from '@/lib/mainFunction/session';
import Link from "next/link";
import Image from "next/image";
import { FiEdit, FiTrash2, FiPlus, FiSearch } from "react-icons/fi";
import React from 'react';
import EditProductModal from '@/Component/seller-componet/Seller-Pedit';
import DeleteProduct from '@/Component/seller-componet/Seller-Pdelete';


const MyProductPage =async() => {
    const user = await getUserData()
    // console.log(user,"USER");
    const  products = await getProductBySellerId(user?.id)
    // console.log( products,'ALL PRODU');
   return (
    <section className="p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            My Products
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all products created by the seller.
          </p>
        </div>

        <Link
          href="/dashboard/seller/add-product"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg transition"
        >
          <FiPlus />
          Add Product
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="mt-8 flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          {/* <FiSearch className="absolute left-4 top-3.5 text-gray-400" /> */}

          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <select className="border rounded-lg px-4 py-3">
          <option>All Categories</option>
          <option>Books</option>
          <option>Electronics</option>
          <option>Fashion</option>
        </select>

        <select className="border rounded-lg px-4 py-3">
          <option>All Status</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto mt-8 bg-white rounded-xl shadow">
        <table className="w-full">
          <thead className="bg-orange-50">
            <tr className="text-left">
              <th className="p-4">Image</th>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products?.map((product) => (
              <tr
                key={product._id}
                className="border-t hover:bg-orange-50"
              >
                <td className="p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={70}
                    height={70}
                    className="rounded-lg object-cover"
                  />
                </td>

                <td className="p-4 font-medium">
                  {product.title}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4 font-semibold text-orange-600">
                  ${product.price}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                   
                      {/* <FiEdit size={18} /> */}
                      <EditProductModal item={product}></EditProductModal>
                    

                  
                      {/* <FiTrash2 size={18} /> */}
                      <DeleteProduct item={product}></DeleteProduct>
                   
                  </div>
                </td>
              </tr>
            ))}

            {products?.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-12 text-gray-500"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-5 lg:hidden mt-8">
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow p-4"
          >
            <div className="flex gap-4">
              <Image
                src={product.image}
                alt={product.title}
                width={90}
                height={90}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <p className="mt-2 font-bold text-orange-600">
                  ${product.price}
                </p>

                <p className="text-sm text-gray-500">
                  Stock : {product.stock}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg flex justify-center items-center gap-2">
                <FiEdit />
                Edit
              </button>

              <button className="flex-1 bg-red-500 text-white py-2 rounded-lg flex justify-center items-center gap-2">
                <FiTrash2 />
                Delete
              </button>
            </div>
          </div>
        ))}

        {products?.length === 0 && (
          <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProductPage;