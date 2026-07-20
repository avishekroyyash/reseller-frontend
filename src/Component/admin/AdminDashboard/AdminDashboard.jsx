"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { GetAdminDashboard } from "@/lib/apiGetCall/GetAdminDashboard";

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
      setLoading(true);

      const data = await GetAdminDashboard();

      setDashboard(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!dashboard) {
    return <EmptyState />;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-orange-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <DashboardHeader onRefresh={loadDashboard} />
        </motion.div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <DashboardCards dashboard={dashboard} />
        </motion.div>

        {/* Tables */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2"
        >
          <RecentOrdersTable
            orders={dashboard?.recentOrders || []}
          />

          <RecentUsersTable
            users={dashboard?.recentUsers || []}
          />
        </motion.div>

        {/* Quick Actions */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <QuickActions />
        </motion.div>

      </div>
    </motion.section>
  );
}