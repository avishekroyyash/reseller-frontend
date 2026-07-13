"use client";

import { useEffect, useState } from "react";
import DashboardSkeleton from "./DashboardSkeleton";
import DashboardHeader from "./DashboardHeader";
import DashboardCards from "./DashboardCards";
import OrderAnalytics from "./OrderAnalytics";
import RecentOrders from "./RecentOrders";
import { GetSellerDashboardData } from "@/lib/apiGetCall/GetSellerDashboardData";
import { useSession } from "@/lib/auth-client";



export default function SellerDashboard() {
    const {data} = useSession()
    const user=data?.user
    //  console.log(user?.id,'USER');
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);

 useEffect(() => {
  if (!user?.id) return;

  async function loadDashboard() {
    try {
      const data = await GetSellerDashboardData(user.id);
      setDashboard(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  loadDashboard();
}, [user?.id]);
//   console.log(dashboard,'DASHBOARD-API-DATA');

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-orange-50">
      
      
  <div className="max-w-7xl mx-auto p-6">

    <DashboardHeader />

    <DashboardCards dashboard={dashboard} />

    <div className="mt-8">
      <OrderAnalytics dashboard={dashboard} />
    </div>
  <div className="mt-8">

    <RecentOrders
        orders={dashboard.recentOrders}
    />

</div>
 
</div>
    </div>
  );
}