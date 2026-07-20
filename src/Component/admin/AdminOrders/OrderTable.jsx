"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiEye, FiEdit2, FiAlertTriangle } from "react-icons/fi";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderCard from "./OrderCard";


export default function OrderTable({
  orders,
  onView,
  onUpdate,
  onDispute,
}) {


  return (
    <>

      {/* Desktop Table */}

      <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:.5}}
        className="hidden lg:block bg-white dark:bg-gray-900 rounded-2xl shadow border border-orange-100 dark:border-gray-700 overflow-x-auto transition-colors duration-500"
      >


        <table className="min-w-full">


          <thead className="bg-orange-500 text-white">


            <tr>

              {[
                "Product",
                "Buyer",
                "Seller",
                "Price",
                "Payment",
                "Status",
                "Date",
                "Actions"
              ].map((item)=>(

                <th
                  key={item}
                  className="px-5 py-4 text-left"
                >
                  {item}
                </th>

              ))}


            </tr>


          </thead>




          <tbody>


            {
              orders.map((order,index)=>(


                <motion.tr

                  key={order._id}

                  initial={{opacity:0,y:10}}

                  animate={{opacity:1,y:0}}

                  transition={{delay:index*.05}}

                  className="border-b dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-800 transition"

                >




                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">


                      <Image

                        src={order.productInfo.productImage}

                        alt={order.productInfo.productTitle}

                        width={60}

                        height={60}

                        className="rounded-lg object-cover border dark:border-gray-700"

                      />



                      <p className="font-semibold text-gray-800 dark:text-white">

                        {order.productInfo.productTitle}

                      </p>



                    </div>


                  </td>







                  <td className="px-5 py-4">

                    <p className="font-semibold text-gray-800 dark:text-white">

                      {order.buyerInfo.name}

                    </p>


                    <p className="text-sm text-gray-500 dark:text-gray-400">

                      {order.buyerInfo.email}

                    </p>


                  </td>






                  <td className="px-5 py-4">


                    <p className="font-semibold text-gray-800 dark:text-white">

                      {order.sellerInfo.name}

                    </p>


                    <p className="text-sm text-gray-500 dark:text-gray-400">

                      {order.sellerInfo.email}

                    </p>


                  </td>






                  <td className="px-5 py-4 text-gray-800 dark:text-gray-200">

                    ${order.productInfo.productPrice}

                  </td>







                  <td className="px-5 py-4">


                    <span

                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                        order.paymentStatus==="paid"

                        ?

                        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"

                        :

                        "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"

                      }`}

                    >

                      {order.paymentStatus}

                    </span>


                  </td>







                  <td className="px-5 py-4">

                    <OrderStatusBadge status={order.orderStatus}/>

                  </td>








                  <td className="px-5 py-4 text-gray-700 dark:text-gray-300">

                    {new Date(order.createdAt).toLocaleDateString()}

                  </td>








                  <td className="px-5 py-4">


                    <div className="flex justify-center gap-2">



                      <button

                        onClick={()=>onView(order)}

                        className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"

                      >

                        <FiEye/>

                      </button>





                      <button

                        onClick={()=>onUpdate(order)}

                        className="p-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition"

                      >

                        <FiEdit2/>

                      </button>





                      <button

                        onClick={()=>onDispute(order)}

                        className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"

                      >

                        <FiAlertTriangle/>

                      </button>




                    </div>


                  </td>





                </motion.tr>


              ))
            }



          </tbody>



        </table>


      </motion.div>







      {/* Mobile Cards */}



      <div className="grid gap-5 lg:hidden">


        {
          orders.map((order,index)=>(


            <motion.div

              key={order._id}

              initial={{opacity:0,scale:.95}}

              animate={{opacity:1,scale:1}}

              transition={{delay:index*.05}}

            >


              <OrderCard

                order={order}

                onView={onView}

                onUpdate={onUpdate}

                onDispute={onDispute}

              />


            </motion.div>


          ))
        }



      </div>




    </>
  );
}