export default function PurchaseStatusBadge({ status }) {
  const colors = {
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-orange-100 text-orange-700",
    shipped: "bg-blue-100 text-blue-700",
    delivered: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        colors[status.toLowerCase()] ||
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}