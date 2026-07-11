"use client";

import { useEffect, useState } from "react";

export default function CancelOrderModal({
  isOpen,
  onClose,
  onConfirm,
  loading = false,
}) {
  const [reason, setReason] = useState("");

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      setReason("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-white shadow-2xl"
      >
        {/* Header */}

        <div className="bg-red-500 rounded-t-2xl px-6 py-5 text-white">
          <h2 className="text-2xl font-bold">
            Cancel Order
          </h2>

          <p className="text-red-100 mt-1">
            Please confirm your action.
          </p>
        </div>

        {/* Body */}

        <div className="p-6">

          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-5xl">
              ⚠️
            </div>
          </div>

          <h3 className="text-center text-xl font-bold mt-5">
            Are you sure?
          </h3>

          <p className="text-center text-gray-500 mt-3">
            Cancelling this order cannot be undone.
            This action is only available while your order
            is still pending.
          </p>

          <textarea
            placeholder="Reason for cancellation (optional)"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            className="mt-6 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-red-400"
          />

        </div>

        {/* Footer */}

        <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end px-6 pb-6">

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border font-semibold hover:bg-gray-100 transition"
          >
            Keep Order
          </button>

          <button
            disabled={loading}
            onClick={() => onConfirm(reason)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition disabled:opacity-50"
          >
            {loading ? "Cancelling..." : "Cancel Order"}
          </button>

        </div>

      </div>
    </div>
  );
}