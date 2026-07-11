"use client";

const statusStyles = {
  Pending: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    ring: "ring-yellow-200",
    dot: "bg-yellow-500",
  },
  Accepted: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    ring: "ring-blue-200",
    dot: "bg-blue-500",
  },
  Processing: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    ring: "ring-orange-200",
    dot: "bg-orange-500",
  },
  Shipped: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    ring: "ring-purple-200",
    dot: "bg-purple-500",
  },
  Delivered: {
    bg: "bg-green-100",
    text: "text-green-700",
    ring: "ring-green-200",
    dot: "bg-green-500",
  },
  Cancelled: {
    bg: "bg-red-100",
    text: "text-red-700",
    ring: "ring-red-200",
    dot: "bg-red-500",
  },
};

export default function OrderStatusBadge({ status }) {
  const style = statusStyles[status] || {
    bg: "bg-gray-100",
    text: "text-gray-700",
    ring: "ring-gray-200",
    dot: "bg-gray-500",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        text-sm
        font-semibold
        ${style.bg}
        ${style.text}
        ring-1
        ${style.ring}
      `}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full ${style.dot}`}
      ></span>

      {status}
    </span>
  );
}