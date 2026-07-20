"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

import OrderStatusBadge from "./OrderStatusBadge";
import CancelOrderModal from "./CancelOrderModal";
import { BuyerOrderCancel } from "@/lib/action/BuyerOrderCancel";

export default function OrderCard({ order }) {
  const router = useRouter();

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    productInfo,
    sellerInfo,
    paymentStatus,
    orderStatus,
    createdAt,
  } = order;

  async function handleConfirm(reason) {
    try {
      setLoading(true);

      const data = await BuyerOrderCancel(order._id, {
        reason,
      });

      if (data.modifiedCount > 0) {
        toast.success("Order cancelled successfully");
        setCancelModalOpen(false);
        router.refresh();
      } else {
        toast.warning("Order could not be cancelled.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to cancel order.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
        }}
        whileHover={{
          y: -5,
        }}
        className="
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          dark:border-gray-700
          bg-white
          dark:bg-gray-900
          shadow-lg
          transition-colors
          duration-300
        "
      >
        <div className="p-5 lg:p-7">

          <div className="flex flex-col xl:flex-row gap-7">

            {/* Product Image */}

            <div className="flex justify-center">
              <Image
                src={productInfo.productImage}
                alt={productInfo.productTitle}
                width={180}
                height={180}
                className="
                  h-40
                  w-40
                  sm:h-44
                  sm:w-44
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-gray-700
                  object-cover
                "
              />
            </div>

            {/* Details */}

            <div className="flex-1">

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {productInfo.productTitle}
              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Seller
                <span className="ml-2 font-semibold text-gray-800 dark:text-gray-200">
                  {sellerInfo.name}
                </span>
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Order Date
                  </p>

                  <p className="font-semibold text-gray-900 dark:text-white">
                    {new Date(createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Payment
                  </p>

                  <span
                    className="
                      mt-2
                      inline-flex
                      rounded-full
                      bg-green-100
                      dark:bg-green-900/40
                      px-3
                      py-1
                      text-sm
                      font-semibold
                      text-green-700
                      dark:text-green-300
                    "
                  >
                    {paymentStatus}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total Price
                  </p>

                  <p className="text-2xl font-bold text-orange-500">
                    ${productInfo.productPrice}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Order Status
                  </p>

                  <OrderStatusBadge status={orderStatus} />
                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col gap-4 w-full xl:w-56">

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  router.push(`/dashboard/buyer/orders/${order._id}`)
                }
                className="
                  rounded-xl
                  bg-orange-500
                  py-3
                  font-semibold
                  text-white
                  shadow-md
                  hover:bg-orange-600
                  transition
                "
              >
                View Details
              </motion.button>

              {orderStatus === "pending" ? (
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setCancelModalOpen(true)}
                  className="
                    rounded-xl
                    border-2
                    border-red-500
                    py-3
                    font-semibold
                    text-red-500
                    hover:bg-red-500
                    hover:text-white
                    transition
                  "
                >
                  Cancel Order
                </motion.button>
              ) : (
                <button
                  disabled
                  className="
                    rounded-xl
                    bg-gray-100
                    dark:bg-gray-800
                    py-3
                    font-semibold
                    text-gray-500
                    dark:text-gray-400
                    cursor-not-allowed
                  "
                >
                  Cannot Cancel
                </button>
              )}

            </div>

          </div>

        </div>
      </motion.div>

      <AnimatePresence>
        {cancelModalOpen && (
          <CancelOrderModal
            isOpen={cancelModalOpen}
            loading={loading}
            onClose={() => setCancelModalOpen(false)}
            onConfirm={handleConfirm}
          />
        )}
      </AnimatePresence>
    </>
  );
}