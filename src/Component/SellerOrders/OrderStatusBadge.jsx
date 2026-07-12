export default function OrderStatusBadge({ status }) {
  const statusStyle = {
    pending:
      "bg-yellow-100 text-yellow-700 border border-yellow-300",

    accepted:
      "bg-blue-100 text-blue-700 border border-blue-300",

    processing:
      "bg-orange-100 text-orange-700 border border-orange-300",

    shipped:
      "bg-purple-100 text-purple-700 border border-purple-300",

    delivered:
      "bg-green-100 text-green-700 border border-green-300",

    rejected:
      "bg-red-100 text-red-700 border border-red-300",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
        statusStyle[status] ||
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}