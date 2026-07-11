import Image from "next/image";

export default function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <div className="flex flex-col items-center">

        <Image
          src={user.image}
          alt={user.name}
          width={36}
          height={36}
          className="w-36 h-36 rounded-full border-4 border-orange-400 object-cover"
        />

        <h2 className="text-2xl font-bold mt-5">
          {user.name}
        </h2>

        <p className="text-gray-500">
          {user.email}
        </p>

        <div className="mt-6 w-full space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-500">
              Role
            </span>

            <span className="font-semibold capitalize">
              {user.role}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Status
            </span>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
              {user.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Verified
            </span>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                user.emailVerified
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {user.emailVerified ? "Yes" : "No"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Joined
            </span>

            <span className="font-medium">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}