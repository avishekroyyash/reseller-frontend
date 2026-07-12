"use client";

import { useEffect, useState } from "react";

export default function RejectOrderModal({
  isOpen,
  onClose,
  onConfirm,
  loading = false,
}) {
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setReason("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Header */}

        <div className="bg-red-500 text-white px-6 py-5">
          <h2 className="text-2xl font-bold">
            Reject Order
          </h2>

          <p className="text-red-100 mt-1">
            This action cannot be undone.
          </p>
        </div>

        {/* Body */}

        <div className="p-6">

          <div className="flex justify-center mb-5">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-5xl">
              ⚠️
            </div>
          </div>

          <h3 className="text-center text-xl font-bold">
            Reject this order?
          </h3>

          <p className="text-center text-gray-500 mt-3">
            Please provide a reason for rejecting this order.
          </p>

          <textarea
            rows={5}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Reason for rejection..."
            className="mt-6 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-red-400"
          />

        </div>

        {/* Footer */}

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 px-6 pb-6">

          <button
            onClick={onClose}
            className="border rounded-xl px-6 py-3 font-semibold hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={() => onConfirm(reason)}
            className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-6 py-3 font-semibold disabled:opacity-50"
          >
            {loading ? "Rejecting..." : "Reject Order"}
          </button>

        </div>

      </div>
    </div>
  );
}