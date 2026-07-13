"use client";

export default function StatCard({
  title,
  value,
  icon,
  color = "from-orange-400 to-orange-600",
  description,
}) {
  return (
    <div className="group bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-sm text-gray-500 font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>

          <p className="text-xs text-gray-400 mt-3">
            {description}
          </p>
        </div>

        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}