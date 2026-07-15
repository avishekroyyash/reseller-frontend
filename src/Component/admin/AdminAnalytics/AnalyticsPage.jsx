"use client";

import { useState } from "react";



import AnalyticsHeader from "./AnalyticsHeader";
import AnalyticsCards from "./AnalyticsCards";

import UserGrowthChart from "./UserGrowthChart";
import MonthlyOrdersChart from "./MonthlyOrdersChart";
import CategoryPerformanceChart from "./CategoryPerformanceChart";
import TopCategoriesChart from "./TopCategoriesChart";

import LoadingSkeleton from "./LoadingSkeleton";
import EmptyState from "./EmptyState";

 const analyticsData = {
  summary: {
    users: 1250,
    orders: 3480,
    revenue: 128450,
    products: 780,
    sellers: 120,
    categories: 14,
  },

  userGrowth: [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 180 },
    { month: "Mar", users: 250 },
    { month: "Apr", users: 320 },
    { month: "May", users: 420 },
    { month: "Jun", users: 530 },
    { month: "Jul", users: 640 },
  ],

  monthlyOrders: [
    { month: "Jan", orders: 260 },
    { month: "Feb", orders: 340 },
    { month: "Mar", orders: 420 },
    { month: "Apr", orders: 520 },
    { month: "May", orders: 630 },
    { month: "Jun", orders: 710 },
    { month: "Jul", orders: 820 },
  ],

  categoryPerformance: [
    { category: "Books", sales: 420 },
    { category: "Electronics", sales: 880 },
    { category: "Fashion", sales: 610 },
    { category: "Home", sales: 500 },
    { category: "Sports", sales: 310 },
  ],

  topCategories: [
    { name: "Electronics", value: 40 },
    { name: "Books", value: 25 },
    { name: "Fashion", value: 20 },
    { name: "Others", value: 15 },
  ],
};


export default function AnalyticsPage() {
  const [loading] = useState(false);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!analyticsData) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      <AnalyticsHeader />

      <AnalyticsCards
        summary={analyticsData.summary}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <UserGrowthChart
          data={analyticsData.userGrowth}
        />

        <MonthlyOrdersChart
          data={analyticsData.monthlyOrders}
        />

        <CategoryPerformanceChart
          data={analyticsData.categoryPerformance}
        />

        <TopCategoriesChart
          data={analyticsData.topCategories}
        />

      </div>

    </div>
  );
}