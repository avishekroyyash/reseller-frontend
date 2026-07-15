"use client";

import { FiSearch } from "react-icons/fi";

export default function ProductToolbar({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
}) {
  return (
    <div className="bg-white rounded-2xl border border-orange-200 shadow-sm p-5">

      <div className="grid md:grid-cols-3 gap-4">

        <div className="relative">

          <FiSearch
            className="absolute left-4 top-3.5 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search products..."
            className="w-full h-11 border rounded-lg pl-11 pr-4 outline-none focus:border-orange-500"
          />

        </div>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="h-11 border rounded-lg px-4"
        >
          <option value="all">
            All Categories
          </option>

          <option>
            Electronics
          </option>

          <option>
            Fashion
          </option>

          <option>
            Books
          </option>

          <option>
            Furniture
          </option>

        </select>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="h-11 border rounded-lg px-4"
        >
          <option value="all">
            All Status
          </option>

          <option value="pending">
            Pending
          </option>

          <option value="approved">
            Approved
          </option>

          <option value="rejected">
            Rejected
          </option>

        </select>

      </div>

    </div>
  );
}