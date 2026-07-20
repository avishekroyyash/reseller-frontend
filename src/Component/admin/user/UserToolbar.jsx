"use client";

import { motion } from "framer-motion";
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

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.4
      }}


      className="bg-white dark:bg-gray-900 rounded-2xl border border-orange-200 dark:border-gray-800 shadow-sm p-4 sm:p-5 mb-6 transition-colors duration-300"

    >

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}

        <div className="relative">

          <BiSearch
            className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-500"
            size={18}
          />

          <input

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            placeholder="Search users..."


            className="w-full h-11 border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 transition"

          />


        </div>

        {/* Role Filter */}


        <select

          value={role}

          onChange={(e)=>setRole(e.target.value)}


          className="w-full h-11 border border-gray-300 dark:border-gray-700 rounded-lg px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 transition"

        >

          <option value="all">
            All Roles
          </option>
          <option value="admin">
            Admin
          </option>
          <option value="buyer">
            Buyer
          </option>
          <option value="seller">
            Seller
          </option>

        </select>

        {/* Status Filter */}

        <select

          value={status}

          onChange={(e)=>setStatus(e.target.value)}


          className="w-full h-11 border border-gray-300 dark:border-gray-700 rounded-lg px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 transition"

        >


          <option value="all">
            All Status
          </option>


          <option value="active">
            Active
          </option>


          <option value="blocked">
            Blocked
          </option>


        </select>



      </div>


    </motion.div>

  );

}