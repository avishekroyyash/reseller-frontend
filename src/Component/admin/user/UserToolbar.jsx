"use client";

import { BiSearch } from "react-icons/bi";



export default function UserToolbar({
  search,
  setSearch,
  role,
  setRole,
  status,
  setStatus,
}) {
  return (
    <div className="bg-white rounded-2xl border border-orange-200 shadow-sm p-5 mb-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}

        <div className="relative">

          {/* <BiSearch
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          /> */}

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
           className="h-11 border rounded-lg px-4 focus:border-orange-500 outline-none"
          />

        </div>

        {/* Role */}

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="h-11 border rounded-lg px-4 focus:border-orange-500 outline-none"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-11 border rounded-lg px-4 focus:border-orange-500 outline-none"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>

      </div>

    </div>
  );
}