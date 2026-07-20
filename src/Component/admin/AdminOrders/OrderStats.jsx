"use client";

import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiClock,
  FiTruck,
  FiCheckCircle,
  FiXCircle,
  FiDollarSign,
} from "react-icons/fi";


export default function OrderStats({ orders }) {


  const totalOrders = orders.length;


  const pending = orders.filter(
    (o)=>o.orderStatus==="pending"
  ).length;


  const processing = orders.filter(
    (o)=>o.orderStatus==="processing"
  ).length;


  const delivered = orders.filter(
    (o)=>o.orderStatus==="delivered"
  ).length;


  const cancelled = orders.filter(
    (o)=>o.orderStatus==="cancelled"
  ).length;




  const revenue = orders
    .filter((o)=>o.paymentStatus==="paid")
    .reduce(
      (sum,item)=>
        sum + Number(item.productInfo?.productPrice || 0),
      0
    );




  const cards = [

    {
      title:"Total Orders",
      value:totalOrders,
      icon:<FiShoppingBag size={24}/>
    },

    {
      title:"Pending",
      value:pending,
      icon:<FiClock size={24}/>
    },

    {
      title:"Processing",
      value:processing,
      icon:<FiTruck size={24}/>
    },

    {
      title:"Delivered",
      value:delivered,
      icon:<FiCheckCircle size={24}/>
    },

    {
      title:"Cancelled",
      value:cancelled,
      icon:<FiXCircle size={24}/>
    },

    {
      title:"Revenue",
      value:`$${revenue}`,
      icon:<FiDollarSign size={24}/>
    },

  ];



  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">


      {cards.map((card,index)=>(


        <motion.div

          key={card.title}

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:index*0.1
          }}

          whileHover={{
            scale:1.05
          }}

          className="bg-gradient-to-r from-orange-500 to-orange-400 dark:from-orange-600 dark:to-orange-500 text-white rounded-2xl p-4 sm:p-5 shadow-lg transition-colors duration-500"

        >



          <div className="flex justify-between items-center gap-3">


            <div>


              <p className="text-sm text-orange-100">

                {card.title}

              </p>



              <h2 className="text-2xl sm:text-3xl font-bold mt-2">

                {card.value}

              </h2>


            </div>




            <div className="bg-white/20 p-3 rounded-xl">

              {card.icon}

            </div>



          </div>



        </motion.div>


      ))}



    </div>

  );

}