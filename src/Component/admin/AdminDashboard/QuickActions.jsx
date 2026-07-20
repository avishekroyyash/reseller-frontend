"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiBarChart2,
  FiArrowRight,
} from "react-icons/fi";


const actions = [
  {
    title: "Manage Users",
    description: "View, block, activate and manage marketplace users.",
    href: "/dashboard/admin/users",
    icon: FiUsers,
  },
  {
    title: "Manage Products",
    description: "Approve, reject and manage all products.",
    href: "/dashboard/admin/products",
    icon: FiPackage,
  },
  {
    title: "Manage Orders",
    description: "Track every marketplace order and resolve disputes.",
    href: "/dashboard/admin/orders",
    icon: FiShoppingCart,
  },
  {
    title: "Platform Analytics",
    description: "View users, orders, categories and business growth.",
    href: "/dashboard/admin/analysis",
    icon: FiBarChart2,
  },
];


export default function QuickActions() {

  return (

    <motion.div
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      className="bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-2xl shadow-sm p-4 sm:p-6 transition-colors duration-300"
    >


      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Quick Actions
        </h2>


        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Quickly access the most important administration pages.
        </p>


      </div>



      {/* Cards */}


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">


        {actions.map((item,index)=>{


          const Icon=item.icon;


          return (

            <motion.div
              key={item.title}
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:index*0.1}}
              whileHover={{y:-8}}
            >

              <Link
                href={item.href}
                className="group block h-full border border-orange-100 dark:border-gray-700 rounded-2xl p-5 bg-white dark:bg-gray-900 hover:bg-orange-500 dark:hover:bg-orange-600 transition-all duration-300 hover:shadow-xl"
              >


                <div className="flex justify-between items-start">


                  <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center group-hover:bg-white transition">

                    <Icon className="text-2xl text-orange-500 group-hover:text-orange-500"/>

                  </div>



                  <FiArrowRight className="text-orange-400 group-hover:text-white text-xl transition"/>


                </div>



                <h3 className="mt-6 text-xl font-bold text-gray-800 dark:text-white group-hover:text-white transition">

                  {item.title}

                </h3>



                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400 group-hover:text-orange-100 transition">

                  {item.description}

                </p>



              </Link>


            </motion.div>

          );


        })}


      </div>


    </motion.div>

  );

}