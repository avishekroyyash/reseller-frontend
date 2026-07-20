"use client";

import { motion } from "framer-motion";
import {
  FiSearch,
  FiFilter,
  FiCreditCard,
  FiArrowDown,
} from "react-icons/fi";


export default function OrderToolbar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  paymentFilter,
  setPaymentFilter,
  sortBy,
  setSortBy,
}) {


  return (

    <motion.div
      initial={{opacity:0,y:-20}}
      animate={{opacity:1,y:0}}
      transition={{duration:.4}}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-orange-100 dark:border-gray-700 p-4 sm:p-5 transition-colors duration-500"
    >


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">



        {/* Search */}


        <motion.div
          initial={{opacity:0,scale:.95}}
          animate={{opacity:1,scale:1}}
          transition={{delay:.1}}
          className="relative"
        >

          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"/>


          <input
            type="text"
            placeholder="Search product, buyer, seller..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 transition"
          />


        </motion.div>






        {/* Status */}



        <motion.div
          initial={{opacity:0,scale:.95}}
          animate={{opacity:1,scale:1}}
          transition={{delay:.2}}
          className="relative"
        >


          <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"/>



          <select
            value={statusFilter}
            onChange={(e)=>setStatusFilter(e.target.value)}
            className="w-full appearance-none pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 transition"
          >

            <option value="all">
              All Status
            </option>

            <option value="pending">
              Pending
            </option>

            <option value="accepted">
              Accepted
            </option>

            <option value="processing">
              Processing
            </option>

            <option value="shipped">
              Shipped
            </option>

            <option value="delivered">
              Delivered
            </option>

            <option value="cancelled">
              Cancelled
            </option>


          </select>


        </motion.div>







        {/* Payment */}



        <motion.div
          initial={{opacity:0,scale:.95}}
          animate={{opacity:1,scale:1}}
          transition={{delay:.3}}
          className="relative"
        >


          <FiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"/>



          <select
            value={paymentFilter}
            onChange={(e)=>setPaymentFilter(e.target.value)}
            className="w-full appearance-none pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 transition"
          >

            <option value="all">
              All Payments
            </option>

            <option value="paid">
              Paid
            </option>

            <option value="unpaid">
              Unpaid
            </option>


          </select>


        </motion.div>









        {/* Sort */}



        <motion.div
          initial={{opacity:0,scale:.95}}
          animate={{opacity:1,scale:1}}
          transition={{delay:.4}}
          className="relative"
        >


          <FiArrowDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"/>




          <select
            value={sortBy}
            onChange={(e)=>setSortBy(e.target.value)}
            className="w-full appearance-none pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 transition"
          >

            <option value="newest">
              Newest First
            </option>

            <option value="oldest">
              Oldest First
            </option>


          </select>



        </motion.div>



      </div>


    </motion.div>

  );

}