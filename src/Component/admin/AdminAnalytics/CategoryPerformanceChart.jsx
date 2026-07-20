"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { FiGrid } from "react-icons/fi";

export default function CategoryPerformanceChart({data}){

  return(

    <motion.div
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:.5}}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-orange-100 dark:border-gray-700 shadow-sm p-4 sm:p-6 transition-colors duration-500"
    >

      <div className="flex items-center gap-3 mb-5">

        <motion.div
          whileHover={{scale:1.08,rotate:8}}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center"
        >

          <FiGrid className="text-xl sm:text-2xl text-orange-500 dark:text-orange-300"/>

        </motion.div>


        <div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
            Category Performance
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Total sales by category
          </p>

        </div>


      </div>


      <div className="h-64 sm:h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            layout="vertical"
            margin={{
              left:10,
              right:10
            }}
          >

            <CartesianGrid strokeDasharray="3 3"/>


            <XAxis type="number"/>


            <YAxis
              dataKey="category"
              type="category"
              width={80}
            />


            <Tooltip
              contentStyle={{
                background:"#fff",
                borderRadius:"10px"
              }}
            />


            <Bar
              dataKey="sales"
              fill="#f97316"
              radius={[0,10,10,0]}
            />


          </BarChart>


        </ResponsiveContainer>


      </div>


    </motion.div>

  );

}