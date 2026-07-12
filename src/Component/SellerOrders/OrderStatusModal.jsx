"use client";

import { useEffect, useState } from "react";

const FLOW = [
  "pending",
  "accepted",
  "processing",
  "shipped",
  "delivered",
];

export default function OrderStatusModal({
  isOpen,
  order,
  onClose,
  onSave,
}) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (order) {
      setStatus(order.orderStatus);
    }
  }, [order]);

  if (!isOpen || !order) return null;

  const currentIndex = FLOW.indexOf(order.orderStatus);

  const nextStatuses = FLOW.slice(currentIndex + 1);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl w-full max-w-xl overflow-hidden"
      >
        {/* Header */}

        <div className="bg-orange-500 text-white p-6">

          <h2 className="text-2xl font-bold">
            Update Order Status
          </h2>

          <p className="text-orange-100 mt-2">
            Change delivery progress
          </p>

        </div>

        {/* Body */}

        <div className="p-6">

          <div className="mb-5">

            <label className="font-semibold">
              Current Status
            </label>

            <div className="mt-2 p-3 rounded-xl bg-orange-100 text-orange-700 font-bold capitalize">
              {order.orderStatus}
            </div>

          </div>

          <div>

            <label className="font-semibold">
              Next Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="w-full mt-2 border rounded-xl p-3"
            >
              <option value="">
                Select Status
              </option>

              {nextStatuses.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t p-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(status)}
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}