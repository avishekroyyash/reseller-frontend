"use client";

import {
  FiCheckCircle,
  FiEye,
  FiTrash2,
  FiXCircle,
} from "react-icons/fi";

export default function ProductTable({
  products,
  loading,
  onApprove,
  onReject,
  onDelete,
  onView,
}) {
  // Status Badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-orange-100 text-orange-700";
    }
  };

  return (
    <>
      {/* ================= Desktop Table ================= */}

      <div className="hidden lg:block overflow-x-auto bg-white rounded-2xl shadow border border-orange-200">
        <table className="w-full">
          <thead className="bg-orange-100">
            <tr>
              <th className="px-5 py-4 text-left">Image</th>
              <th className="px-5 py-4 text-left">Product</th>
              <th className="px-5 py-4 text-left">Seller</th>
              <th className="px-5 py-4 text-center">Category</th>
              <th className="px-5 py-4 text-center">Price</th>
              <th className="px-5 py-4 text-center">Stock</th>
              <th className="px-5 py-4 text-center">Status</th>
              <th className="px-5 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="py-10 text-center text-gray-500">
                  Loading products...
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-10 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t hover:bg-orange-50 transition"
                >
                  <td className="px-5 py-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                  </td>

                  <td className="px-5 py-4 font-semibold">
                    {product.title}
                  </td>

                  <td className="px-5 py-4">
                    {product.sellerName}
                  </td>

                  <td className="px-5 py-4 text-center">
                    {product.category}
                  </td>

                  <td className="px-5 py-4 text-center">
                    ${product.price}
                  </td>

                  <td className="px-5 py-4 text-center">
                    {product.stock}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadge(
                        product.status
                      )}`}
                    >
                      {product.status || "Pending"}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-2">
                      {/* View */}
                      <button
                        onClick={() => onView?.(product)}
                        className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white"
                      >
                        <FiEye />
                      </button>

                      {/* Approve */}
                      <button
                        onClick={() => onApprove(product)}
                        disabled={product.status === "approved"}
                        className={`p-2 rounded text-white ${
                          product.status === "approved"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-600"
                        }`}
                      >
                        <FiCheckCircle />
                      </button>

                      {/* Reject */}
                      <button
                        onClick={() => onReject(product)}
                        disabled={product.status === "rejected"}
                        className={`p-2 rounded text-white ${
                          product.status === "rejected"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-yellow-500 hover:bg-yellow-600"
                        }`}
                      >
                        <FiXCircle />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => onDelete(product)}
                        className="bg-red-500 hover:bg-red-600 p-2 rounded text-white"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= Mobile Cards ================= */}

      <div className="grid lg:hidden gap-4">
        {loading ? (
          <div className="bg-white rounded-xl p-8 text-center shadow border border-orange-200">
            Loading products...
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center shadow border border-orange-200">
            No products found.
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow border border-orange-200 p-4"
            >
              <div className="flex gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 rounded-lg object-cover border"
                />

                <div className="flex-1">
                  <h2 className="font-bold text-lg">
                    {product.title}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {product.sellerName}
                  </p>

                  <p className="text-sm mt-1">
                    Category: {product.category}
                  </p>

                  <p className="text-sm">
                    Stock: {product.stock}
                  </p>

                  <p className="text-orange-600 font-bold mt-2">
                    ${product.price}
                  </p>

                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadge(
                      product.status
                    )}`}
                  >
                    {product.status || "Pending"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-5">
                {/* View */}
                <button
                  onClick={() => onView?.(product)}
                  className="bg-blue-500 hover:bg-blue-600 py-2 rounded text-white flex justify-center"
                >
                  <FiEye />
                </button>

                {/* Approve */}
                <button
                  onClick={() => onApprove(product)}
                  disabled={product.status === "approved"}
                  className={`py-2 rounded text-white flex justify-center ${
                    product.status === "approved"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  <FiCheckCircle />
                </button>

                {/* Reject */}
                <button
                  onClick={() => onReject(product)}
                  disabled={product.status === "rejected"}
                  className={`py-2 rounded text-white flex justify-center ${
                    product.status === "rejected"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
                >
                  <FiXCircle />
                </button>

                {/* Delete */}
                <button
                  onClick={() => onDelete(product)}
                  className="bg-red-500 hover:bg-red-600 py-2 rounded text-white flex justify-center"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}