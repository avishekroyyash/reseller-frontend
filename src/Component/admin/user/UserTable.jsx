"use client";

export default function UserTable({
  users,
  loading,
  onUpdate,
   onDelete,
     onBlock,
}) {
 return (
  <>
    {/* Desktop Table */}
    <div className="hidden lg:block bg-white rounded-2xl border border-orange-200 shadow-sm overflow-x-auto">
      <table className="w-full">
        <thead className="bg-orange-100">
          <tr>
            <th className="px-5 py-4 text-left">Image</th>
            <th className="px-5 py-4 text-left">Name</th>
            <th className="px-5 py-4 text-left">Email</th>
            <th className="px-5 py-4 text-left">Role</th>
            <th className="px-5 py-4 text-left">Status</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} className="py-10 text-center">
                Loading...
              </td>
            </tr>
          ) : users.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-10 text-center">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user._id}
                className="border-t hover:bg-orange-50"
              >
                <td className="px-5 py-4">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>

                <td className="px-5 py-4 font-medium">
                  {user.name}
                </td>

                <td className="px-5 py-4">{user.email}</td>

                <td className="px-5 py-4 capitalize">
                  {user.role}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onUpdate(user)}
                      className="rounded-lg bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => onBlock(user)}
                      className={`rounded-lg px-3 py-2 text-white ${
                        user.status === "active"
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {user.status === "active"
                        ? "Block"
                        : "Unblock"}
                    </button>

                    <button
                      onClick={() => onDelete(user)}
                      className="rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>

    {/* Mobile & Tablet Cards */}
    <div className="grid gap-4 lg:hidden">
      {loading ? (
        <div className="rounded-xl bg-white p-8 text-center shadow">
          Loading...
        </div>
      ) : users.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow">
          No users found.
        </div>
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            className="rounded-2xl border border-orange-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={user.image}
                alt={user.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  {user.name}
                </h3>

                <p className="text-sm text-gray-500 break-all">
                  {user.email}
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 capitalize">
                    {user.role}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                onClick={() => onUpdate(user)}
                className="rounded-lg bg-orange-500 py-2 text-white hover:bg-orange-600"
              >
                Update
              </button>

              <button
                onClick={() => onBlock(user)}
                className={`rounded-lg py-2 text-white ${
                  user.status === "active"
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {user.status === "active"
                  ? "Block"
                  : "Unblock"}
              </button>

              <button
                onClick={() => onDelete(user)}
                className="col-span-2 rounded-lg bg-red-500 py-2 text-white hover:bg-red-600"
              >
                Delete User
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </>
);
}