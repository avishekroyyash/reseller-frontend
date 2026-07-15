"use client";

import { ResolveDispute } from "@/lib/action/AdminUpDelOrder";
import { useEffect, useState } from "react";
import { FiAlertTriangle, FiSave, FiX } from "react-icons/fi";
import { toast } from "react-toastify";


export default function DisputeModal({
  isOpen,
  order,
  onClose,
  onSuccess,
}) {
  const [adminNote, setAdminNote] = useState("");
  const [resolved, setResolved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (order?.dispute) {
      setAdminNote(order.dispute.adminNote || "");
      setResolved(order.dispute.resolved || false);
    } else {
      setAdminNote("");
      setResolved(false);
    }
  }, [order]);

  if (!isOpen || !order) return null;

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const result = await ResolveDispute(
        order._id,
        adminNote,
        resolved
      );

      if (result.modifiedCount > 0) {
        toast.success("Dispute updated successfully.");

        onSuccess?.();

        onClose();
      } else {
        toast.info("No changes detected.");
      }
    } catch {
      toast.error("Failed to update dispute.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl">

        <div className="flex justify-between items-center border-b p-6">

          <div className="flex items-center gap-3">

            <FiAlertTriangle
              className="text-orange-500"
              size={24}
            />

            <h2 className="text-2xl font-bold">
              Resolve Dispute
            </h2>

          </div>

          <button onClick={onClose}>
            <FiX size={24} />
          </button>

        </div>

        <div className="p-6 space-y-5">

          <div>

            <label className="font-semibold block mb-2">
              Buyer Reason
            </label>

            <div className="bg-gray-100 rounded-lg p-4">
              {order.dispute?.reason || "No dispute reason provided."}
            </div>

          </div>

          <div>

            <label className="font-semibold block mb-2">
              Admin Note
            </label>

            <textarea
              rows={5}
              value={adminNote}
              onChange={(e) =>
                setAdminNote(e.target.value)
              }
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Write your decision..."
            />

          </div>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={resolved}
              onChange={(e) =>
                setResolved(e.target.checked)
              }
            />

            Mark as Resolved

          </label>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex justify-center items-center gap-2"
          >
            <FiSave />

            {loading ? "Saving..." : "Save Changes"}

          </button>

        </div>

      </div>

    </div>
  );
}