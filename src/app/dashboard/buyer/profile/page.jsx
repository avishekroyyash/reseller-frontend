import ProfileCard from "@/Component/BuyerProfile/ProfileCard";
import ProfileForm from "@/Component/BuyerProfile/ProfileForm";
import { getUserData } from "@/lib/mainFunction/session";

export default async function ProfilePage() {
  const user = await getUserData();

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-orange-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>

          <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section
      className="
        min-h-screen
        bg-orange-50
        dark:bg-gray-950
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Header */}

        <div className="mb-8 lg:mb-10">
          <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 sm:text-4xl lg:text-5xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Manage your personal information
          </p>
        </div>

        {/* Content */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Profile Card */}

          <div className="order-1">
            <ProfileCard user={user} />
          </div>

          {/* Profile Form */}

          <div className="order-2 lg:col-span-2">
            <ProfileForm user={user} />
          </div>
        </div>
      </div>
    </section>
  );
}