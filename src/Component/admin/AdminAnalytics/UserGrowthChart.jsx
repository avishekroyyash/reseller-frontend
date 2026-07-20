"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiTrendingUp } from "react-icons/fi";

export default function UserGrowthChart({data}){

  return(

    <motion.div
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:.5}}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-orange-100 dark:border-gray-700 p-4 sm:p-6 transition-colors duration-500"
    >

      <div className="flex items-center gap-3 mb-5">

        <motion.div
          whileHover={{rotate:10,scale:1.05}}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center"
        >

          <FiTrendingUp className="text-orange-500 dark:text-orange-300 text-xl sm:text-2xl"/>

        </motion.div>

        <div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
            User Growth
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Monthly registered users
          </p>

        </div>

      </div>


      <div className="h-64 sm:h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="4 4"/>

            <XAxis 
              dataKey="month"
              tick={{fill:"currentColor"}}
            />

            <YAxis
              tick={{fill:"currentColor"}}
            />

            <Tooltip
              contentStyle={{
                background:"#fff",
                borderRadius:"10px"
              }}
            />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#f97316"
              strokeWidth={4}
              dot={{r:5}}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </motion.div>

  );

}