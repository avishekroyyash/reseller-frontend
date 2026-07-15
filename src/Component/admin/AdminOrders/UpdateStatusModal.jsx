"use client";

import { UpdateOrderStatus } from "@/lib/action/AdminUpDelOrder";
import { useEffect, useState } from "react";
import { FiX, FiSave } from "react-icons/fi";
import { toast } from "react-toastify";

const STATUS_OPTIONS = [
  "pending",
  "accepted",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

export default function UpdateStatusModal({
  isOpen,
  onClose,
  order,
  onSuccess,
}) {
  const [status, setStatus] = useState(order?.orderStatus || "");
  const [loading, setLoading] = useState(false);

  // Keep local status in sync when a different order is opened
  useEffect(() => {
  setStatus(order?.orderStatus || "");
}, [order]);
  if (!isOpen || !order) return null;

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const result = await UpdateOrderStatus(order._id, status);

      if (result.modifiedCount > 0) {
        toast.success("Order status updated.");

        onSuccess?.();

        onClose();
      } else {
        toast.info("No changes were made.");
      }
    } catch (err) {
      toast.error("Failed to update order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">

        <div className="flex justify-between items-center border-b px-6 py-5">

          <div>

            <h2 className="text-2xl font-bold">
              Update Order Status
            </h2>

            <p className="text-gray-500 text-sm">
              Change the current order status.
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>

        </div>

        <div className="p-6 space-y-5">

          <div>

            <label className="block mb-2 font-semibold">
              Current Status
            </label>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-orange-600 font-semibold">
              {order.orderStatus}
            </div>

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              New Status
            </label>

            <select
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {STATUS_OPTIONS.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </option>
              ))}
            </select>

          </div>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <FiSave />

            {loading ? "Updating..." : "Update Status"}
          </button>

        </div>

      </div>

    </div>
  );
}