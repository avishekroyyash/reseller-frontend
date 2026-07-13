"use client";

export default function OrderStatusCard({
  title,
  value,
  percentage,
  color,
}) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between items-center">

        <h3 className="text-gray-700 font-medium">
          {title}
        </h3>

        <span className="font-bold text-gray-800">
          {value}
        </span>

      </div>

      <div className="w-full h-3 rounded-full bg-orange-100 overflow-hidden">

        <div
          className={`h-full rounded-full ${color}`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}