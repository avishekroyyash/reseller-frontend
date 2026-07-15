"use client";

import Image from "next/image";
import { FiX, FiUser, FiShoppingBag, FiCreditCard, FiCalendar } from "react-icons/fi";

export default function OrderDetailsModal({
  isOpen,
  onClose,
  order,
}) {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b">

          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              Order Details
            </h2>

            <p className="text-gray-500">
              Complete information about this order.
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiX size={24} />
          </button>

        </div>

        <div className="p-6 space-y-8">

          {/* Product */}

          <div className="bg-orange-50 rounded-xl p-5">

            <div className="flex items-center gap-2 mb-5">

              <FiShoppingBag className="text-orange-500" />

              <h3 className="font-bold text-lg">
                Product Information
              </h3>

            </div>

            <div className="flex flex-col md:flex-row gap-6">

              <Image
                src={order.productInfo.productImage}
                alt={order.productInfo.productTitle}
                width={170}
                height={170}
                className="rounded-xl object-cover"
              />

              <div className="space-y-3">

                <h4 className="text-xl font-bold">
                  {order.productInfo.productTitle}
                </h4>

                <p>
                  <span className="font-semibold">
                    Product ID:
                  </span>{" "}
                  {order.productInfo.productId}
                </p>

                <p>
                  <span className="font-semibold">
                    Price:
                  </span>{" "}
                  ${order.productInfo.productPrice}
                </p>

              </div>

            </div>

          </div>

          {/* Buyer & Seller */}

          <div className="grid md:grid-cols-2 gap-5">

            <div className="border rounded-xl p-5">

              <div className="flex items-center gap-2 mb-4">

                <FiUser className="text-orange-500" />

                <h3 className="font-bold">
                  Buyer Information
                </h3>

              </div>

              <p><strong>Name:</strong> {order.buyerInfo.name}</p>
              <p><strong>Email:</strong> {order.buyerInfo.email}</p>
              <p><strong>ID:</strong> {order.buyerInfo.userId}</p>

            </div>

            <div className="border rounded-xl p-5">

              <div className="flex items-center gap-2 mb-4">

                <FiUser className="text-orange-500" />

                <h3 className="font-bold">
                  Seller Information
                </h3>

              </div>

              <p><strong>Name:</strong> {order.sellerInfo.name}</p>
              <p><strong>Email:</strong> {order.sellerInfo.email}</p>
              <p><strong>ID:</strong> {order.sellerInfo.userId}</p>

            </div>

          </div>

          {/* Payment */}

          <div className="border rounded-xl p-5">

            <div className="flex items-center gap-2 mb-4">

              <FiCreditCard className="text-orange-500" />

              <h3 className="font-bold">
                Payment Information
              </h3>

            </div>

            <div className="space-y-2">

              <p>
                <strong>Payment Status:</strong>{" "}
                {order.paymentStatus}
              </p>

              <p>
                <strong>Stripe Session:</strong>
                <br />
                {order.stripeSessionId}
              </p>

              <p>
                <strong>Payment Intent:</strong>
                <br />
                {order.paymentIntentId}
              </p>

            </div>

          </div>

          {/* Timeline */}

          <div className="border rounded-xl p-5">

            <div className="flex items-center gap-2 mb-4">

              <FiCalendar className="text-orange-500" />

              <h3 className="font-bold">
                Order Timeline
              </h3>

            </div>

            <div className="space-y-2">

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

          </div>

        </div>

      </div>

    </div>
  );
}