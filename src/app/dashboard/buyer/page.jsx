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
  // Fetch these from your backend
  const user = await getUserData();
   const wishList = await GetBuyerAllWishlistById(user?.id)
//    console.log(wishList.length,' all wishList ');
   const AllBuyerOrderData = await GetAllDataForBuyerDashBoard(user?.id)
//    console.log(AllBuyerOrderData,'all-buyer-order-data');
   const Torder = AllBuyerOrderData.totalOrders - AllBuyerOrderData.cancelledOrders
  const stats = {
    totalOrders: Torder,
    wishlistCount: wishList.length,
    recentPurchases: AllBuyerOrderData.processingOrders,
    cancelledOrder:AllBuyerOrderData.cancelledOrders,
  };
  const purchases = await GetOrderById(user?.id);

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto px-5 py-8">

        <DashboardHeader user={user} />

        <DashboardStats
          totalOrders={stats.totalOrders}
          wishlistCount={stats.wishlistCount}
          recentPurchases={stats.recentPurchases}
          cancelledOrder={stats.cancelledOrder}
        />

        <div className="mt-10">
          {purchases.length > 0 ? (
            <RecentPurchasesTable purchases={purchases} />
          ) : (
            <EmptyState
              title="No Purchases Yet"
              description="Start shopping to see your recent purchases here."
            />
          )}
        </div>

        <div className="mt-10">
          <QuickActions />
        </div>

      </div>
    </div>
  );
}