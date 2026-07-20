"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductToolbar from "./ProductToolbar";
import ProductTable from "./ProductTable";
import { GetAllProducts } from "@/lib/apiGetCall/GetAllProductAdmin";
import { AdminApproveProduct, AdminDeleteProduct, AdminRejectProduct } from "@/lib/action/AdminUpDelProduct";
import { toast } from "react-toastify";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await GetAllProducts();
      setProducts(data || []);
    } catch (error) {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (product) => {
    const result = await AdminApproveProduct(product._id);

    if (result.modifiedCount > 0) {
      toast.success("Product Approved");

      setProducts((prev) =>
        prev.map((item) =>
          item._id === product._id
            ? { ...item, status: "approved" }
            : item
        )
      );
    }
  };

  const handleReject = async (product) => {
    const result = await AdminRejectProduct(product._id);

    if (result.modifiedCount > 0) {
      toast.success("Product Rejected");

      setProducts((prev) =>
        prev.map((item) =>
          item._id === product._id
            ? { ...item, status: "rejected" }
            : item
        )
      );
    }
  };

  const handleDelete = async (product) => {
    const result = await AdminDeleteProduct(product._id);

    if (result.deletedCount > 0) {
      toast.success("Product Deleted");

      setProducts((prev) =>
        prev.filter((item) => item._id !== product._id)
      );
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const keyword = search.toLowerCase();

      const searchMatch =
        item.title?.toLowerCase().includes(keyword) ||
        item.sellerName?.toLowerCase().includes(keyword);

      const categoryMatch = category === "all" || item.category === category;

      const statusMatch = status === "all" || item.status === status;

      return searchMatch && categoryMatch && statusMatch;
    });
  }, [products, search, category, status]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-orange-50 dark:bg-gray-950 transition-colors duration-500"
    >

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Manage Products
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
          Admin reviews and moderates all product listings.
        </p>
      </div>


      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <ProductToolbar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          status={status}
          setStatus={setStatus}
        />
      </motion.div>


      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="my-5"
      >
        <span className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 font-semibold px-4 py-2 rounded-full text-sm">
          Total Products: {filteredProducts.length}
        </span>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition"
      >
        <ProductTable
          products={filteredProducts}
          loading={loading}
          onApprove={handleApprove}
          onReject={handleReject}
          onDelete={handleDelete}
        />
      </motion.div>

    </motion.div>
  );
}