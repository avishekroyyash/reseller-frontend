"use client";

import { useEffect, useMemo, useState } from "react";
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
  setLoading(true);

  const data = await GetAllProducts();

  setProducts(data);

  setLoading(false);
};

//admin aprove product 
const handleApprove = async (product) => {
  const result = await AdminApproveProduct(
    product._id
  );

  if (result.modifiedCount > 0) {
    toast.success("Product Approved");

    setProducts((prev) =>
      prev.map((item) =>
        item._id === product._id
          ? {
              ...item,
              status: "approved",
            }
          : item
      )
    );
  }
};


//admin reject product 
const handleReject = async (product) => {
  const result = await AdminRejectProduct(
    product._id
  );

  if (result.modifiedCount > 0) {
    toast.success("Product Rejected");

    setProducts((prev) =>
      prev.map((item) =>
        item._id === product._id
          ? {
              ...item,
              status: "rejected",
            }
          : item
      )
    );
  }
};
//admin delete product 
const handleDelete = async (product) => {
  const result = await AdminDeleteProduct(
    product._id
  );

  if (result.deletedCount > 0) {
    toast.success("Product Deleted");

    setProducts((prev) =>
      prev.filter(
        (item) => item._id !== product._id
      )
    );
  }
};

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const keyword = search.toLowerCase();

      const searchMatch =
        item.title?.toLowerCase().includes(keyword) ||
        item.sellerName?.toLowerCase().includes(keyword);

      const categoryMatch =
        category === "all" ||
        item.category === category;

      const statusMatch =
        status === "all" ||
        item.status === status;

      return (
        searchMatch &&
        categoryMatch &&
        statusMatch
      );
    });
  }, [products, search, category, status]);

  return (
    <div className="min-h-screen bg-orange-50 p-4 lg:p-6">

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Manage Products
        </h1>

        <p className="text-gray-500 mt-2">
          Admin reviews and moderates all product listings.
        </p>

      </div>

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
      />

      <div className="my-5">

        <span className="bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-full">
          Total Products : {filteredProducts.length}
        </span>

      </div>


      <ProductTable
  products={filteredProducts}
  loading={loading}
  onApprove={handleApprove}
  onReject={handleReject}
  onDelete={handleDelete}
/>



    </div>
  );
}