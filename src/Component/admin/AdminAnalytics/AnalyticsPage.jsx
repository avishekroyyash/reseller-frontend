"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import AnalyticsHeader from "./AnalyticsHeader";
import AnalyticsCards from "./AnalyticsCards";

import UserGrowthChart from "./UserGrowthChart";
import MonthlyOrdersChart from "./MonthlyOrdersChart";
import CategoryPerformanceChart from "./CategoryPerformanceChart";
import TopCategoriesChart from "./TopCategoriesChart";

import LoadingSkeleton from "./LoadingSkeleton";
import EmptyState from "./EmptyState";


const analyticsData={
  summary:{
    users:1250,
    orders:3480,
    revenue:128450,
    products:780,
    sellers:120,
    categories:14,
  },

  userGrowth:[
    {month:"Jan",users:120},
    {month:"Feb",users:180},
    {month:"Mar",users:250},
    {month:"Apr",users:320},
    {month:"May",users:420},
    {month:"Jun",users:530},
    {month:"Jul",users:640},
  ],

  monthlyOrders:[
    {month:"Jan",orders:260},
    {month:"Feb",orders:340},
    {month:"Mar",orders:420},
    {month:"Apr",orders:520},
    {month:"May",orders:630},
    {month:"Jun",orders:710},
    {month:"Jul",orders:820},
  ],

  categoryPerformance:[
    {category:"Books",sales:420},
    {category:"Electronics",sales:880},
    {category:"Fashion",sales:610},
    {category:"Home",sales:500},
    {category:"Sports",sales:310},
  ],

  topCategories:[
    {name:"Electronics",value:40},
    {name:"Books",value:25},
    {name:"Fashion",value:20},
    {name:"Others",value:15},
  ],
};


export default function AnalyticsPage(){

  const [loading]=useState(false);

  if(loading){
    return <LoadingSkeleton/>;
  }

  if(!analyticsData){
    return <EmptyState/>;
  }

  return(

    <motion.div

      initial={{opacity:0,y:20}}

      animate={{opacity:1,y:0}}

      transition={{duration:.5}}

      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"

    >


      <motion.div

        initial={{opacity:0,y:-20}}

        animate={{opacity:1,y:0}}

        transition={{delay:.1}}

      >

        <AnalyticsHeader/>

      </motion.div>
      <motion.div

        initial={{opacity:0,scale:.95}}

        animate={{opacity:1,scale:1}}

        transition={{delay:.2}}

        className="mt-6"

      >

        <AnalyticsCards
          summary={analyticsData.summary}
        />

      </motion.div>

      <motion.div

        initial={{opacity:0,y:30}}

        animate={{opacity:1,y:0}}

        transition={{delay:.3}}

        className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6 mt-8"

      >


        <motion.div
          whileHover={{scale:1.02}}
          transition={{duration:.2}}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-3 sm:p-5 transition-colors duration-500"
        >

          <UserGrowthChart
            data={analyticsData.userGrowth}
          />

        </motion.div>

        <motion.div
          whileHover={{scale:1.02}}
          transition={{duration:.2}}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-3 sm:p-5 transition-colors duration-500"
        >

          <MonthlyOrdersChart
            data={analyticsData.monthlyOrders}
          />

        </motion.div>

        <motion.div
          whileHover={{scale:1.02}}
          transition={{duration:.2}}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-3 sm:p-5 transition-colors duration-500"
        >

          <CategoryPerformanceChart
            data={analyticsData.categoryPerformance}
          />

        </motion.div>

        <motion.div
          whileHover={{scale:1.02}}
          transition={{duration:.2}}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-3 sm:p-5 transition-colors duration-500"
        >

          <TopCategoriesChart
            data={analyticsData.topCategories}
          />

        </motion.div>



      </motion.div>


    </motion.div>

  );
}