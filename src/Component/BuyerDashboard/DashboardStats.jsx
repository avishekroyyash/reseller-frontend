import StatCard from "./StatCard";

export default function DashboardStats({
  totalOrders,
  wishlistCount,
  recentPurchases,
  cancelledOrder
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Orders"
        value={totalOrders}
        icon="📦"
        textColor="text-orange-600"
      />

      <StatCard
        title="Wishlist"
        value={wishlistCount}
        icon="❤️"
        textColor="text-pink-600"
      />

      <StatCard
        title="Recent Purchases"
        value={recentPurchases}
        icon="🛍️"
        textColor="text-green-600"
      />
       <StatCard
        title="Cancel Order"
        value={cancelledOrder}
        icon="❌"
        textColor="text-green-600"
      />

    </div>
  );
}