"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiShoppingCart } from "react-icons/fi";

export default function MonthlyOrdersChart({data}){

  return(

    <motion.div
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:.5}}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-orange-100 dark:border-gray-700 p-4 sm:p-6 transition-colors duration-500"
    >

      <div className="flex items-center gap-3 mb-5">

        <motion.div
          whileHover={{scale:1.08,rotate:8}}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center"
        >

          <FiShoppingCart className="text-orange-500 dark:text-orange-300 text-xl sm:text-2xl"/>

        </motion.div>


        <div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
            Monthly Orders
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Orders received each month
          </p>

        </div>

      </div>


      <div className="h-64 sm:h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="4 4"/>

            <XAxis dataKey="month"/>

            <YAxis/>

            <Tooltip
              contentStyle={{
                background:"#fff",
                borderRadius:"10px"
              }}
            />

            <Bar
              dataKey="orders"
              fill="#f97316"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>


    </motion.div>

  );

}