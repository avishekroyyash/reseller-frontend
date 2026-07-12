"use client";

export default function BuyerInfoModal({
  isOpen,
  onClose,
  buyer,
}) {
  if (!isOpen || !buyer) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
      >
        {/* Header */}

        <div className="bg-orange-500 text-white p-6">

          <h2 className="text-2xl font-bold">
            Buyer Information
          </h2>

          <p className="text-orange-100 mt-1">
            Customer details
          </p>

        </div>

        {/* Body */}

        <div className="p-6 space-y-5">

          <div>

            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <h3 className="font-semibold text-lg">
              {buyer.name}
            </h3>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Email
            </p>

            <h3 className="font-semibold">
              {buyer.email}
            </h3>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Buyer ID
            </p>

            <h3 className="font-semibold break-all">
              {buyer.userId}
            </h3>

          </div>

        </div>

        {/* Footer */}

        <div className="p-6 border-t">

          <button
            onClick={onClose}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}