"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import EditProductModal from "@/Component/seller-componet/Seller-Pedit";
import DeleteProduct from "@/Component/seller-componet/Seller-Pdelete";

export default function ProductList({ products }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [stock, setStock] = useState("All");

  // Unique categories
  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch =
        product.title.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        product.category === category;

      const matchStock =
        stock === "All" ||
        (stock === "In Stock"
          ? product.stock > 0
          : product.stock <= 0);

      return (
        matchSearch &&
        matchCategory &&
        matchStock
      );
    });
  }, [products, search, category, stock]);

  return (
    <section className="p-4 md:p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold">
            My Products
          </h1>

          <p className="text-gray-500">
            Manage all products
          </p>

        </div>

        <Link
          href="/dashboard/seller/add-product"
          className="bg-orange-500 text-white px-5 py-3 rounded-lg"
        >
          <FiPlus className="inline mr-2" />
          Add Product
        </Link>

      </div>

      {/* Filters */}

      <div className="mt-8 grid lg:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="border rounded-lg px-4 py-3"
        >
          {categories.map((cat) => (
            <option key={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={stock}
          onChange={(e) =>
            setStock(e.target.value)
          }
          className="border rounded-lg px-4 py-3"
        >
          <option>All</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>

      </div>

      {/* Table */}

      <div className="overflow-x-auto mt-8 bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-orange-50">

            <tr>

              <th className="p-4 text-left">
                Image
              </th>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-left">
                Stock
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.map((product) => (

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
                    className="rounded-lg"
                  />

                </td>

                <td className="p-4">
                  {product.title}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4 text-orange-600 font-semibold">
                  ${product.price}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <EditProductModal
                      item={product}
                    />

                    <DeleteProduct
                      item={product}
                    />

                  </div>

                </td>

              </tr>

            ))}

            {filteredProducts.length === 0 && (

              <tr>

                <td
                  colSpan={6}
                  className="text-center py-10"
                >
                  No products found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}