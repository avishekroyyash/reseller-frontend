"use client";

import { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";
import OrderStatusBadge from "./OrderStatusBadge";
import CancelOrderModal from "./CancelOrderModal";

export default function OrderCard({ order }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
const [loading, setLoading] = useState(false);

  const {
    product,
    seller,
    paymentStatus,
    orderStatus,
    createdAt,
  } = order;

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
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 rounded-xl object-cover border"
              />
            </div>

            {/* Details */}
            <div className="flex-1">

              <h2 className="text-2xl font-bold text-gray-800">
                {product.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Seller:
                <span className="ml-2 font-semibold text-gray-700">
                  {seller.name}
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
                    ${product.price}
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

              {orderStatus === "Pending" ? (
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

      console.log("Reason:", reason);

      // Call your backend here
      // await axios.patch(`/api/orders/${order._id}/cancel`, {
      //   reason,
      // });

      alert("Order cancelled successfully.");

      setCancelModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("Failed to cancel order.");
    } finally {
      setLoading(false);
    }
  }}
/>
    </>
  );
}