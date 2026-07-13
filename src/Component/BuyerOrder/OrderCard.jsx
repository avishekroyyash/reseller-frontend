"use client";

import { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";
import OrderStatusBadge from "./OrderStatusBadge";
import CancelOrderModal from "./CancelOrderModal";
import Image from "next/image";
import { BuyerOrderCancel } from "@/lib/action/BuyerOrderCancel";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function OrderCard({ order }) {
  // console.log(order,'ORDER-CARD');
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
const [loading, setLoading] = useState(false);

  const {
    productInfo,
    sellerInfo,
    paymentStatus,
    orderStatus,
    createdAt,
  } = order;
//  console.log(productInfo.productTitle,'product-title');
//  console.log(sellerInfo,'Seller');
//  console.log(paymentStatus,'paymentStatuse');
//  console.log(orderStatus,'orderStatus');
//  console.log(createdAt,'CreatedAt');
  const handleCancel = () => {
  setCancelModalOpen(true);
};

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Image */}
            <div className="w-full lg:w-44 flex justify-center">
              <Image
                src={productInfo.productImage}
                alt={productInfo.productTitle}
                width={40}
                height={40}
                className="w-40 h-40 rounded-xl object-cover border"
              />
            </div>

            {/* Details */}
            <div className="flex-1">

              <h2 className="text-2xl font-bold text-gray-800">
                {productInfo.productTitle}
              </h2>

              <p className="text-gray-500 mt-2">
                Seller:
                <span className="ml-2 font-semibold text-gray-700">
                  {sellerInfo.name}
                </span>
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">

                <div>
                  <p className="text-sm text-gray-500">
                    Order Date
                  </p>

                  <p className="font-semibold">
                    {createdAt}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Payment
                  </p>

                  <span className="inline-block mt-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {paymentStatus}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Total Price
                  </p>

                  <p className="text-orange-600 text-xl font-bold">
                    ${productInfo.productPrice}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    Order Status
                  </p>

                  <OrderStatusBadge status={orderStatus} />
                </div>

              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col justify-center gap-3 lg:w-52">

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
              >
                View Details
              </button>

              {orderStatus === "pending" ? (
                <button
                  onClick={handleCancel}
                  className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 rounded-lg font-semibold transition"
                >
                  Cancel Order
                </button>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-100 text-gray-500 py-3 rounded-lg cursor-not-allowed"
                >
                  Cannot Cancel
                </button>
              )}

            </div>

          </div>
        </div>
      </div>
     
      {/* Modal */}
      <OrderDetailsModal
        order={order}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
<CancelOrderModal
  isOpen={cancelModalOpen}
  loading={loading}
  onClose={() => setCancelModalOpen(false)}
  onConfirm={async (reason) => {
    try {
      setLoading(true);

      // const response = await fetch(
      //   `http://localhost:5000/orders/${order._id}/cancel`,
      //   {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       reason,
      //     }),
      //   }
      // );
       
      //const data = await response.json();
      const id = order?._id
     const data = await BuyerOrderCancel(id, {
  reason,
});

      if (data.modifiedCount > 0) {
        toast.error("Order cancelled successfully.");

        setCancelModalOpen(false);

        // Refresh the page
        router.refresh();
      } else {
        toast.warning("Order could not be cancelled.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel order.");
    } finally {
      setLoading(false);
    }
  }}
/>
    </>
  );
}