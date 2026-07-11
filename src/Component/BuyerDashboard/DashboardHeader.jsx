export default function DashboardHeader({ user }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
      <div>
        <h1 className="text-4xl font-bold text-orange-600">
          Buyer Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back,{" "}
          <span className="font-semibold text-gray-700">
            {user?.name}
          </span>{" "}
          👋
        </p>
      </div>
    </div>
  );
}