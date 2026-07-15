"use client";

import Image from "next/image";
import { FiUser } from "react-icons/fi";

export default function RecentUsersTable({ users = [] }) {
  const roleBadge = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-purple-100 text-purple-700";
      case "seller":
        return "bg-orange-100 text-orange-700";
      case "buyer":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const statusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-700";
      case "blocked":
        return "bg-red-100 text-red-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-orange-100">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Recent Users
          </h2>

          <p className="text-sm text-gray-500">
            Recently joined users
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                User
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Role
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t hover:bg-orange-50 transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <FiUser className="text-orange-500 text-xl" />
                      </div>
                    )}

                    <div>
                      <p className="font-semibold text-gray-800">
                        {user.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        ID: {String(user._id).slice(-6)}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${roleBadge(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusBadge(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="lg:hidden p-4 space-y-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="border border-orange-100 rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <FiUser className="text-orange-500 text-2xl" />
                </div>
              )}

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  {user.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {user.email}
                </p>

                <div className="flex gap-2 mt-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${roleBadge(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${statusBadge(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}