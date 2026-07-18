import { FiInbox } from "react-icons/fi";

export default function EmptyState() {
  return (
    <div className="py-24 text-center">

      <div className="w-24 h-24 mx-auto rounded-full bg-orange-100 flex items-center justify-center">

        <FiInbox className="text-5xl text-orange-500" />

      </div>

      <h2 className="mt-6 text-3xl font-bold text-gray-800">
        No Category Found
      </h2>

      <p className="mt-3 text-gray-500">
        Try searching with another keyword.
      </p>

    </div>
  );
}