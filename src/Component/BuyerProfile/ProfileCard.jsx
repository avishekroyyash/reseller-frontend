import Image from "next/image";

export default function ProfileCard({ user }) {
  return (
    <div
      className="rounded-3xl border border-orange-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg dark:shadow-black/30 p-6 sm:p-8 transition-colors duration-300"
    >
      <div className="flex flex-col items-center">
        <Image
          src={user.image}
          alt={user.name}
          width={144}
          height={144}
         className="h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36 rounded-full border-4 border-orange-400 object-cover"
        />

        <h2 className="mt-5 text-center text-2xl font-bold text-gray-900 dark:text-white">
          {user.name}
        </h2>

        <p className="mt-1 break-all text-center text-sm text-gray-500 dark:text-gray-400">
          {user.email}
        </p>

        <div className="mt-8 w-full space-y-4">
          {/* Role */}

          <div className="flex items-center justify-between rounded-xl bg-orange-50 dark:bg-gray-800 p-3">
            <span className="text-gray-500 dark:text-gray-400">
              Role
            </span>

            <span className="font-semibold capitalize text-gray-900 dark:text-white">
              {user.role}
            </span>
          </div>

          {/* Status */}

          <div className="flex items-center justify-between rounded-xl bg-orange-50 dark:bg-gray-800 p-3">
            <span className="text-gray-500 dark:text-gray-400">
              Status
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-400">
              {user.status}
            </span>
          </div>

          {/* Email Verified */}

          <div className="flex items-center justify-between rounded-xl bg-orange-50 dark:bg-gray-800 p-3">
            <span className="text-gray-500 dark:text-gray-400">
              Verified
            </span>

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                user.emailVerified
                  ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {user.emailVerified ? "Yes" : "No"}
            </span>
          </div>

          {/* Joined */}

          <div className="flex items-center justify-between rounded-xl bg-orange-50 dark:bg-gray-800 p-3">
            <span className="text-gray-500 dark:text-gray-400">
              Joined
            </span>

            <span className="font-medium text-gray-900 dark:text-white">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}