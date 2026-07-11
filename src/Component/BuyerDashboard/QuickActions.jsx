import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">

        <Link
          href="/dashboard/buyer/payment-history"
          className="bg-orange-500 text-white rounded-xl py-4 text-center font-semibold hover:bg-orange-600 transition"
        >
          Payment History
        </Link>

        <Link
          href="/dashboard/buyer/orders"
          className="border border-orange-500 text-orange-600 rounded-xl py-4 text-center font-semibold hover:bg-orange-50 transition"
        >
          My Orders
        </Link>

        <Link
          href="/dashboard/buyer/wishlist"
          className="border border-orange-500 text-orange-600 rounded-xl py-4 text-center font-semibold hover:bg-orange-50 transition"
        >
          Wishlist
        </Link>

        <Link
          href="/dashboard/buyer/profile"
          className="border border-orange-500 text-orange-600 rounded-xl py-4 text-center font-semibold hover:bg-orange-50 transition"
        >
          My Profile
        </Link>

      </div>

    </div>
  );
}