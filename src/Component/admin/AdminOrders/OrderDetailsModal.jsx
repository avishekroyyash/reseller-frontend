"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiX, FiUser, FiShoppingBag, FiCreditCard, FiCalendar } from "react-icons/fi";

export default function OrderDetailsModal({
  isOpen,
  onClose,
  order,
}) {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-4">

      <motion.div
        initial={{opacity:0,scale:.9,y:20}}
        animate={{opacity:1,scale:1,y:0}}
        transition={{duration:.3}}
        className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-colors duration-500"
      >

        {/* Header */}

        <div className="flex items-start justify-between px-4 sm:px-6 py-5 border-b dark:border-gray-700">

          <div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Order Details
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Complete information about this order.
            </p>

          </div>


          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-white transition"
          >
            <FiX size={24}/>
          </button>


        </div>


        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">


          {/* Product */}

          <motion.div
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            className="bg-orange-50 dark:bg-gray-800 rounded-xl p-4 sm:p-5"
          >

            <div className="flex items-center gap-2 mb-5">

              <FiShoppingBag className="text-orange-500"/>

              <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                Product Information
              </h3>

            </div>


            <div className="flex flex-col md:flex-row gap-5">


              <Image
                src={order.productInfo.productImage}
                alt={order.productInfo.productTitle}
                width={170}
                height={170}
                className="w-full md:w-40 h-40 rounded-xl object-cover border dark:border-gray-700"
              />


              <div className="space-y-3 text-gray-700 dark:text-gray-300">

                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                  {order.productInfo.productTitle}
                </h4>


                <p>
                  <span className="font-semibold">Product ID:</span>{" "}
                  {order.productInfo.productId}
                </p>


                <p>
                  <span className="font-semibold">Price:</span>{" "}
                  ${order.productInfo.productPrice}
                </p>


              </div>


            </div>


          </motion.div>





          {/* Buyer Seller */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


            <motion.div
              initial={{opacity:0,x:-20}}
              animate={{opacity:1,x:0}}
              className="border dark:border-gray-700 rounded-xl p-4 sm:p-5"
            >

              <div className="flex items-center gap-2 mb-4">

                <FiUser className="text-orange-500"/>

                <h3 className="font-bold text-gray-800 dark:text-white">
                  Buyer Information
                </h3>

              </div>


              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">

                <p><strong>Name:</strong> {order.buyerInfo.name}</p>

                <p><strong>Email:</strong> {order.buyerInfo.email}</p>

                <p className="break-all"><strong>ID:</strong> {order.buyerInfo.userId}</p>

              </div>


            </motion.div>





            <motion.div
              initial={{opacity:0,x:20}}
              animate={{opacity:1,x:0}}
              className="border dark:border-gray-700 rounded-xl p-4 sm:p-5"
            >

              <div className="flex items-center gap-2 mb-4">

                <FiUser className="text-orange-500"/>

                <h3 className="font-bold text-gray-800 dark:text-white">
                  Seller Information
                </h3>

              </div>


              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">

                <p><strong>Name:</strong> {order.sellerInfo.name}</p>

                <p><strong>Email:</strong> {order.sellerInfo.email}</p>

                <p className="break-all"><strong>ID:</strong> {order.sellerInfo.userId}</p>

              </div>


            </motion.div>


          </div>






          {/* Payment */}


          <motion.div
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            className="border dark:border-gray-700 rounded-xl p-4 sm:p-5"
          >

            <div className="flex items-center gap-2 mb-4">

              <FiCreditCard className="text-orange-500"/>

              <h3 className="font-bold text-gray-800 dark:text-white">
                Payment Information
              </h3>

            </div>


            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">

              <p>
                <strong>Payment Status:</strong>{" "}
                {order.paymentStatus}
              </p>


              <p className="break-all">
                <strong>Stripe Session:</strong>
                <br/>
                {order.stripeSessionId}
              </p>


              <p className="break-all">
                <strong>Payment Intent:</strong>
                <br/>
                {order.paymentIntentId}
              </p>


            </div>


          </motion.div>






          {/* Timeline */}


          <motion.div
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            className="border dark:border-gray-700 rounded-xl p-4 sm:p-5"
          >

            <div className="flex items-center gap-2 mb-4">

              <FiCalendar className="text-orange-500"/>

              <h3 className="font-bold text-gray-800 dark:text-white">
                Order Timeline
              </h3>

            </div>


            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">


              <p>
                <strong>Status:</strong>{" "}
                {order.orderStatus}
              </p>


              <p>
                <strong>Created:</strong>{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>


              <p>
                <strong>Updated:</strong>{" "}
                {new Date(order.updatedAt).toLocaleString()}
              </p>


            </div>


          </motion.div>


        </div>


      </motion.div>


    </div>
  );
}