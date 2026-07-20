import DashboardHeader from "@/Component/BuyerDashboard/DashboardHeader";
import DashboardStats from "@/Component/BuyerDashboard/DashboardStats";
import EmptyState from "@/Component/BuyerDashboard/EmptyState";
import QuickActions from "@/Component/BuyerDashboard/QuickActions";
import RecentPurchasesTable from "@/Component/BuyerDashboard/RecentPurchasesTable";

import { GetAllDataForBuyerDashBoard } from "@/lib/apiGetCall/GetAllDataForBuyerDashBoard";
import { GetBuyerAllWishlistById } from "@/lib/apiGetCall/GetBuyerAllWishlist";
import { GetOrderById } from "@/lib/apiGetCall/GetBuyerOrder";
import { getUserData } from "@/lib/mainFunction/session";

export default async function BuyerDashboardPage() {
  const user = await getUserData();

  const wishList = await GetBuyerAllWishlistById(user?.id);

  const AllBuyerOrderData = await GetAllDataForBuyerDashBoard(user?.id);

  const totalOrders =
    AllBuyerOrderData.totalOrders -
    AllBuyerOrderData.cancelledOrders;

  const stats = {
    totalOrders,
    wishlistCount: wishList.length,
    recentPurchases: AllBuyerOrderData.processingOrders,
    cancelledOrder: AllBuyerOrderData.cancelledOrders,
  };

  const purchases = await GetOrderById(user?.id);

  return (
    <section className="min-h-screen bg-orange-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

        {/* Header */}
        <DashboardHeader user={user} />

        {/* Statistics */}
        <div className="mt-6">
          <DashboardStats
            totalOrders={stats.totalOrders}
            wishlistCount={stats.wishlistCount}
            recentPurchases={stats.recentPurchases}
            cancelledOrder={stats.cancelledOrder}
          />
        </div>

        {/* Recent Purchases */}
        <div className="mt-8 lg:mt-10 overflow-x-auto">
          {purchases.length > 0 ? (
            <RecentPurchasesTable purchases={purchases} />
          ) : (
            <EmptyState
              title="No Purchases Yet"
              description="Start shopping to see your recent purchases here."
            />
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 lg:mt-10">
          <QuickActions />
        </div>

      </div>
    </section>
  );
}