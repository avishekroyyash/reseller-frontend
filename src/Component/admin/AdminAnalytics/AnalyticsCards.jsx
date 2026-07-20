"use client";

import { motion } from "framer-motion";
import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiPackage,
  FiShoppingBag,
  FiGrid,
} from "react-icons/fi";

const cards=[
  {
    key:"users",
    title:"Total Users",
    icon:FiUsers,
    prefix:"",
  },
  {
    key:"orders",
    title:"Total Orders",
    icon:FiShoppingCart,
    prefix:"",
  },
  {
    key:"revenue",
    title:"Total Revenue",
    icon:FiDollarSign,
    prefix:"$",
  },
  {
    key:"products",
    title:"Products",
    icon:FiPackage,
    prefix:"",
  },
  {
    key:"sellers",
    title:"Sellers",
    icon:FiShoppingBag,
    prefix:"",
  },
  {
    key:"categories",
    title:"Categories",
    icon:FiGrid,
    prefix:"",
  },
];


export default function AnalyticsCards({summary}){

  return(

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-4 sm:gap-5">


      {cards.map((card,index)=>{

        const Icon=card.icon;


        return(

          <motion.div

            key={card.key}

            initial={{opacity:0,y:20}}

            animate={{opacity:1,y:0}}

            transition={{delay:index*.08}}

            whileHover={{scale:1.03,y:-5}}

            className="group bg-white dark:bg-gray-900 rounded-2xl border border-orange-100 dark:border-gray-700 shadow-sm hover:shadow-xl overflow-hidden transition-colors duration-500"

          >


            <div className="h-1 bg-orange-500"></div>


            <div className="p-4 sm:p-5">


              <div className="flex items-center justify-between">


                <motion.div

                  whileHover={{rotate:8}}

                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center transition"

                >

                  <Icon className="text-2xl text-orange-500 dark:text-orange-300 group-hover:text-orange-600"/>

                </motion.div>





                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 px-3 py-1 rounded-full font-semibold">

                  Live

                </span>


              </div>





              <div className="mt-5">


                <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">

                  {card.title}

                </h3>




                <p className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-2">

                  {card.prefix}

                  {summary[card.key]?.toLocaleString() || 0}

                </p>


              </div>


            </div>


          </motion.div>


        );

      })}


    </div>

  );

}