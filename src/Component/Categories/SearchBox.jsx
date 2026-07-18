"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBox({
  search,
  setSearch,
}) {
  return (
    <div className="max-w-xl mx-auto relative">

      <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search category..."
        className="w-full bg-white rounded-full border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-orange-500 focus:ring-2  focus:ring-orange-100 shadow-sm"
      />

    </div>
  );
}