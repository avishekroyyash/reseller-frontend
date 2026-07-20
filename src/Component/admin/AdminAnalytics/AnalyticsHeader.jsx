"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiDownload, FiRefreshCw } from "react-icons/fi";

export default function AnalyticsHeader() {
  return (
    <motion.div
      initial={{opacity:0,y:-20}}
      animate={{opacity:1,y:0}}
      transition={{duration:.4}}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-orange-100 dark:border-gray-700 p-4 sm:p-6 mb-6 transition-colors duration-500"
    >

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        {/* Left */}

        <div className="flex items-start gap-3 sm:gap-4">

          <motion.div
            whileHover={{rotate:10,scale:1.05}}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center shrink-0"
          >

            <FiBarChart2 className="text-orange-500 dark:text-orange-300 text-2xl sm:text-3xl"/>

          </motion.div>


          <div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">

              Platform Analytics

            </h1>


            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">

              Monitor marketplace growth, users, orders and category performance.

            </p>


          </div>


        </div>





        {/* Right */}

        <motion.div
          initial={{opacity:0,x:20}}
          animate={{opacity:1,x:0}}
          transition={{delay:.2}}
          className="flex flex-col sm:flex-row gap-3"
        >


          <button
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl transition"
          >

            <FiRefreshCw/>

            Refresh

          </button>




          <button
            className="flex items-center justify-center gap-2 border border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-gray-800 text-orange-600 dark:text-orange-400 px-5 py-3 rounded-xl transition"
          >

            <FiDownload/>

            Export Report

          </button>



        </motion.div>


      </div>


    </motion.div>
  );
}