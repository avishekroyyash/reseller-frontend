export default function DashboardHeader({ user }) {
  return (
    <header className="mb-6 sm:mb-8 lg:mb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Left Content */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 dark:text-orange-400 transition-colors duration-300">
            Buyer Dashboard
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Welcome back,{" "}
            <span className="font-semibold text-gray-700 dark:text-white">
              {user?.name}
            </span>{" "}
            👋
          </p>
        </div>

        {/* Right Badge */}
        <div className="self-start sm:self-auto">
          <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-500/20 px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400">
            Buyer Account
          </span>
        </div>

      </div>
    </header>
  );
}