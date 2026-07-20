"use client";

import { motion } from "framer-motion";
import ProfileCard from "../BuyerProfile/ProfileCard";
import ProfileForm from "../BuyerProfile/ProfileForm";


export default function ProfilePageClient({ user }) {
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50 dark:bg-gray-950">
        <p className="text-gray-500 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-orange-50 dark:bg-gray-950 py-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .1 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-orange-600">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Manage your personal information and account settings.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .2 }}
          >
            <ProfileCard user={user} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .3 }}
            className="lg:col-span-2"
          >
            <ProfileForm user={user} />
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}