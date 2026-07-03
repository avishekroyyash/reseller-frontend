"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaUndo,
} from "react-icons/fa";

export default function ProductSearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [condition, setCondition] = useState(searchParams.get("condition") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
        params.set("page", "1");
      if (search) params.set("search", search);
      if (category) params.set("category", category);
      if (condition) params.set("condition", condition);
      if (sort) params.set("sort", sort);

      router.push(`/all-products?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, category, condition, sort, router]);

const handleReset = () => {
  setSearch("");
  setCategory("");
  setCondition("");
  setSort("");

  router.push("/all-products?page=1");
};

  return (
    <div className="mb-8 rounded-2xl border border-orange-100 bg-white p-5 shadow-md">

      <div className="mb-5 flex items-center gap-2">
        <FaFilter className="text-xl text-orange-500" />
        <h2 className="text-xl font-bold text-gray-800">
          Search & Filter Products
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">

        {/* Search */}

        <div className="relative xl:col-span-2">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        >
          <option value="">All Categories</option>
          <option value="Books">Books</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Sports">Sports</option>
          <option value="Vehicle">Vehicle</option>
        </select>

        {/* Condition */}

        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        >
          <option value="">All Condition</option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Used">Used</option>
        </select>

        {/* Sort + Reset */}

        <div className="flex gap-3">

          <div className="relative flex-1">
            <FaSortAmountDown className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            >
              <option value="">Sort By</option>
              <option value="latest">Latest</option>
              <option value="low">Price Low → High</option>
              <option value="high">Price High → Low</option>
              <option value="stock">Stock</option>
            </select>
          </div>

          <button
            onClick={handleReset}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white transition hover:bg-orange-600"
          >
            <FaUndo />
          </button>

        </div>

      </div>
    </div>
  );
}