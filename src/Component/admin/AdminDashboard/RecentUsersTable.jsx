"use client";

import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

export default function RecentUsersTable({ users = [] }) {

  const roleBadge = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
      case "seller":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300";
      case "buyer":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };


  const statusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      case "blocked":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-orange-100 dark:border-gray-800 shadow-sm overflow-hidden transition-colors duration-300"
    >

      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b border-orange-100 dark:border-gray-800">

        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Recent Users
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Recently joined users
          </p>
        </div>

      </div>


      {/* Desktop */}

      <div className="hidden lg:block overflow-x-auto">

        <table className="w-full">

          <thead className="bg-orange-50 dark:bg-gray-800">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                User
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Role
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            {users.map((user) => (

              <motion.tr
                key={user._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.01 }}
                className="border-t border-gray-100 dark:border-gray-800 hover:bg-orange-50 dark:hover:bg-gray-800 transition"
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

                      <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                        <FiUser className="text-orange-500 text-xl"/>
                      </div>

                    )}


                    <div>

                      <p className="font-semibold text-gray-800 dark:text-white">
                        {user.name}
                      </p>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        ID: {String(user._id).slice(-6)}
                      </p>

                    </div>

                  </div>

                </td>


                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  {user.email}
                </td>


                <td className="px-6 py-4">

                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${roleBadge(user.role)}`}>
                    {user.role}
                  </span>

                </td>


                <td className="px-6 py-4">

                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusBadge(user.status)}`}>
                    {user.status}
                  </span>

                </td>


              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>



      {/* Mobile */}

      <div className="lg:hidden p-4 space-y-4">

        {users.map((user)=>(

          <motion.div
            key={user._id}
            initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}}
            whileHover={{scale:1.02}}
            className="border border-orange-100 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl p-4 transition-colors"
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

                <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                  <FiUser className="text-orange-500 text-2xl"/>
                </div>

              )}



              <div className="flex-1">

                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {user.name}
                </h3>


                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>


                <div className="flex flex-wrap gap-2 mt-3">

                  <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${roleBadge(user.role)}`}>
                    {user.role}
                  </span>


                  <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${statusBadge(user.status)}`}>
                    {user.status}
                  </span>

                </div>


              </div>


            </div>


          </motion.div>

        ))}

      </div>


    </motion.div>
  );
}