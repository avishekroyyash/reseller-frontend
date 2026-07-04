"use client";

import { BuyerWishlistDel } from "@/lib/action/BuyerWishlistDel";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaTrash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

export default function WishlistTable({ products }) {
  const handleDelete = async (id) => {
    // console.log("Delete Product:", id);
    const del = await BuyerWishlistDel(id)
    toast.warning('Wishlist Delete Successfully')
    // Call your delete function here
    // await SellerProductDelete(id)
  };

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
      <table className="min-w-full">
        {/* Table Header */}
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Image</th>
            <th className="px-6 py-4 text-left font-semibold">
              Product Title
            </th>
            <th className="px-6 py-4 text-left font-semibold">Price</th>
            <th className="px-6 py-4 text-center font-semibold">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {products?.map((product) => (
            <tr
              key={product._id}
              className="border-b transition hover:bg-orange-50"
            >
              {/* Image */}
              <td className="px-6 py-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={70}
                  height={70}
                  className="rounded-lg object-cover"
                />
              </td>

              {/* Title */}
              <td className="px-6 py-4 font-medium text-gray-700">
                {product.title}
              </td>

              {/* Price */}
              <td className="px-6 py-4 font-bold text-orange-600">
                ${product.price}
              </td>

              {/* Buttons */}
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-3">
                  {/* Add Product */}
                  <Link
                    href="/all-products"
                    className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600"
                  >
                    <FaPlus />
                    Add
                  </Link>

                  {/* Details */}
                  <Link
                    href={`/all-products/${product._id}`}
                    className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    <FaEye />
                    Details
                  </Link>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {products?.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="py-10 text-center text-gray-500"
              >
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}