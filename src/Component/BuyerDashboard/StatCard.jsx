export default function StatCard({
  title,
  value,
  icon,
  color = "orange",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border-l-4 border-orange-500">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 text-${color}-600`}>
            {value}
          </h2>

        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

    </div>
  );
}