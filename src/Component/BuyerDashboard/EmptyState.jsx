export default function EmptyState({
  title,
  description,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-10 text-center">

      <div className="text-6xl">
        📦
      </div>

      <h2 className="text-2xl font-bold mt-4">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {description}
      </p>

    </div>
  );
}