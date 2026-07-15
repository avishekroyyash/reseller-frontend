"use client";

import { GetAdminDashboard } from "@/lib/apiGetCall/GetAdminDashboard";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import EmptyState from "./EmptyState";
import DashboardHeader from "./DashboardHeader";
import DashboardCards from "./DashboardCards";
import RecentOrdersTable from "./RecentOrdersTable";
import RecentUsersTable from "./RecentUsersTable";
import QuickActions from "./QuickActions";


export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await GetAdminDashboard();

      setDashboard(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // console.log(dashboard,'DASHBOARD-data');

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!dashboard) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      <DashboardHeader
        onRefresh={loadDashboard}
      />

      <DashboardCards
        dashboard={dashboard}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <RecentOrdersTable
          orders={dashboard.recentOrders}
        />

        <RecentUsersTable
          users={dashboard.recentUsers}
        />

      </div>

      <div className="mt-8">

        <QuickActions />

      </div>

    </div>
  );
}