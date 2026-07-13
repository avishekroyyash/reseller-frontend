"use client";

export default function StatusBadge({ status }) {
  const styles = {
    pending:
      "bg-yellow-100 text-yellow-700",

    accepted:
      "bg-blue-100 text-blue-700",

    processing:
      "bg-orange-100 text-orange-700",

    shipped:
      "bg-purple-100 text-purple-700",

    delivered:
      "bg-green-100 text-green-700",

    rejected:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status] ||
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}