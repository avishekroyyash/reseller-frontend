"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UserTable({
  users,
  loading,
  onUpdate,
  onDelete,
  onBlock,
}) {

  return (
    <>

      {/* Desktop */}

      <div className="hidden lg:block bg-white dark:bg-gray-900 rounded-2xl border border-orange-200 dark:border-gray-800 shadow-sm overflow-x-auto transition-colors duration-300">

        <table className="w-full">

          <thead className="bg-orange-100 dark:bg-gray-800">

            <tr>

              <th className="px-5 py-4 text-left text-gray-700 dark:text-gray-200">
                Image
              </th>

              <th className="px-5 py-4 text-left text-gray-700 dark:text-gray-200">
                Name
              </th>

              <th className="px-5 py-4 text-left text-gray-700 dark:text-gray-200">
                Email
              </th>

              <th className="px-5 py-4 text-left text-gray-700 dark:text-gray-200">
                Role
              </th>

              <th className="px-5 py-4 text-left text-gray-700 dark:text-gray-200">
                Status
              </th>

              <th className="px-5 py-4 text-center text-gray-700 dark:text-gray-200">
                Actions
              </th>

            </tr>

          </thead>


          <tbody>

            {
              users.map((user) => (

                <motion.tr
                  key={user._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.01 }}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-800 transition"
                >

                  <td className="px-5 py-4">

                    <Image
                      src={user.image}
                      alt={user.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                  </td>


                  <td className="px-5 py-4 font-medium text-gray-800 dark:text-white">
                    {user.name}
                  </td>


                  <td className="px-5 py-4 text-gray-600 dark:text-gray-300">
                    {user.email}
                  </td>


                  <td className="px-5 py-4 capitalize text-gray-700 dark:text-gray-300">
                    {user.role}
                  </td>


                  <td className="px-5 py-4">

                    <span className={`${user.status === "active" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"} px-3 py-1 rounded-full text-sm font-medium`}>
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
                        className="rounded-lg bg-yellow-500 px-3 py-2 text-white hover:bg-yellow-600"
                      >
                        Block
                      </button>


                      <button
                        onClick={() => onDelete(user)}
                        className="rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>

                    </div>

                  </td>


                </motion.tr>

              ))
            }

          </tbody>

        </table>

      </div>



      {/* Mobile */}

      <div className="grid gap-4 lg:hidden">

        {
          users.map((user) => (

            <motion.div
              key={user._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-sm transition-colors duration-300"
            >

              <div className="flex gap-4">

                <Image
                  src={user.image}
                  alt={user.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />


                <div>

                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {user.name}
                  </h3>


                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </p>

                </div>

              </div>



              <div className="grid grid-cols-2 gap-3 mt-5">

                <button
                  onClick={() => onUpdate(user)}
                  className="bg-orange-500 text-white rounded-lg py-2"
                >
                  Update
                </button>


                <button
                  onClick={() => onDelete(user)}
                  className="bg-red-500 text-white rounded-lg py-2"
                >
                  Delete
                </button>

              </div>


            </motion.div>

          ))
        }

      </div>


    </>
  );
}