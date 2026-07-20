"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DashboardSkeleton from "./DashboardSkeleton";
import DashboardHeader from "./DashboardHeader";
import DashboardCards from "./DashboardCards";
import OrderAnalytics from "./OrderAnalytics";
import RecentOrders from "./RecentOrders";

import { GetSellerDashboardData } from "@/lib/apiGetCall/GetSellerDashboardData";
import { useSession } from "@/lib/auth-client";

export default function SellerDashboard() {
  const { data } = useSession();
  const user = data?.user;

  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    if (!user?.id) return;

    async function loadDashboard() {
      try {
        const result = await GetSellerDashboardData(user.id);
        setDashboard(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, [user?.id]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-orange-50 transition-colors duration-300 dark:bg-gray-950">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <DashboardHeader />
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <DashboardCards dashboard={dashboard} />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <OrderAnalytics dashboard={dashboard} />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <RecentOrders orders={dashboard?.recentOrders || []} />
        </motion.div>
      </motion.div>
    </div>
  );
}