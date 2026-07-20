"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import EditProductModal from "@/Component/seller-componet/Seller-Pedit";
import DeleteProduct from "@/Component/seller-componet/Seller-Pdelete";
import { motion } from "framer-motion";

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
   <motion.section
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="min-h-screen bg-orange-50 p-4 transition-colors duration-300 dark:bg-gray-950 md:p-8"
>
  {/* Header */}

  <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        My Products
      </h1>

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Manage all products
      </p>
    </div>

    <Link
      href="/dashboard/seller/add-product"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
    >
      <FiPlus className="text-lg" />
      Add Product
    </Link>
  </div>

  {/* Filters */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="mb-8 grid gap-4 lg:grid-cols-3"
  >
    <input
      type="text"
      placeholder="Search product..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
    />

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
    >
      {categories.map((cat) => (
        <option key={cat}>{cat}</option>
      ))}
    </select>

    <select
      value={stock}
      onChange={(e) => setStock(e.target.value)}
      className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
    >
      <option>All</option>
      <option>In Stock</option>
      <option>Out of Stock</option>
    </select>
  </motion.div>

  {/* Mobile */}

  <div className="space-y-5 lg:hidden">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product, index) => (
        <motion.div
          key={product._id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="rounded-2xl border border-orange-100 bg-white p-4 shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex gap-4">
            <Image
              src={product.image}
              alt={product.title}
              width={90}
              height={90}
              className="h-24 w-24 rounded-xl object-cover"
            />

            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white">
                {product.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {product.category}
              </p>

              <p className="mt-3 font-bold text-orange-600">
                ${product.price}
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Stock : {product.stock}
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-3">
            <EditProductModal item={product} />
            <DeleteProduct item={product} />
          </div>
        </motion.div>
      ))
    ) : (
      <div className="rounded-2xl bg-white p-10 text-center shadow dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">
          No products found.
        </p>
      </div>
    )}
  </div>

  {/* Desktop */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="hidden overflow-x-auto rounded-2xl border border-orange-100 bg-white shadow-xl transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 lg:block"
  >
    <table className="min-w-full">
      <thead className="bg-orange-50 dark:bg-gray-800">
        <tr>
          <th className="px-6 py-4 text-left text-gray-700 dark:text-gray-300">
            Image
          </th>

          <th className="px-6 py-4 text-left text-gray-700 dark:text-gray-300">
            Product
          </th>

          <th className="px-6 py-4 text-left text-gray-700 dark:text-gray-300">
            Category
          </th>

          <th className="px-6 py-4 text-left text-gray-700 dark:text-gray-300">
            Price
          </th>

          <th className="px-6 py-4 text-left text-gray-700 dark:text-gray-300">
            Stock
          </th>

          <th className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.tr
              key={product._id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.04 }}
              className="border-t border-orange-100 transition hover:bg-orange-50 dark:border-gray-800 dark:hover:bg-gray-800"
            >
              <td className="px-6 py-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={70}
                  height={70}
                  className="rounded-xl object-cover"
                />
              </td>

              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {product.title}
              </td>

              <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                {product.category}
              </td>

              <td className="px-6 py-4 font-bold text-orange-600">
                ${product.price}
              </td>

              <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                {product.stock}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  <EditProductModal item={product} />
                  <DeleteProduct item={product} />
                </div>
              </td>
            </motion.tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={6}
              className="py-12 text-center text-gray-500 dark:text-gray-400"
            >
              No products found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </motion.div>
</motion.section>
  );
}