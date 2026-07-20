"use client";

import { useMemo, useState } from "react";
import EmptyState from "./EmptyState";
import DashboardStats from "./DashboardStats";
import SearchFilter from "./SearchFilter";
import OrderTable from "./OrderTable";


import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SellerOrderUpdate} from "@/lib/action/SellerOrderUpdate";
import BuyerInfoModal from "./BuyerInfoModal";
import OrderStatusModal from "./OrderStatusModal";
import { SellerOrderReject } from "@/lib/action/SellerOrderReject";
import RejectOrderModal from "./RejectOrderModal";

export default function OrdersPage({ orders }) {

    const router = useRouter();

const [buyerModal, setBuyerModal] = useState(false);
const [statusModal, setStatusModal] = useState(false);
const [selectedOrder, setSelectedOrder] = useState(null);
const [loading, setLoading] = useState(false);
const [rejectModal, setRejectModal] = useState(false);


const openBuyerModal = (order) => {
  setSelectedOrder(order);
  setBuyerModal(true);
};

const openStatusModal = (order) => {
  setSelectedOrder(order);
  setStatusModal(true);
};

const openRejectModal = (order) => {
  setSelectedOrder(order);
  setRejectModal(true);
};

const handleReject = async (reason) => {
  try {
    setLoading(true);

    const result = await SellerOrderReject(
      selectedOrder?._id,
      reason
    );

    if (result.modifiedCount > 0) {
      toast.success("Order rejected successfully.");

      setRejectModal(false);

      router.refresh();
    } else {
      toast.error(result.message || "Reject failed.");
    }
  } catch (error) {
    console.log(error);

    toast.error("Something went wrong.");
  } finally {
    setLoading(false);
  }
};

const handleStatusUpdate = async (status) => {
  try {
    setLoading(true);
//    console.log(selectedOrder._id,'SELECTED-ORDER-ID');
//    console.log(status,'STATUS - DE');
    const result = await SellerOrderUpdate(
      selectedOrder?._id,
      status
    );

    if (result.modifiedCount > 0) {
      toast.success("Status Updated successfully");

      setStatusModal(false);

      router.refresh();
    } else {
      toast.error(result.message || "Update Failed");
    }
  } catch (error) {
    console.log(error);

    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const searchValue = search.toLowerCase();

      const matchSearch =
        order.productInfo.productTitle
          .toLowerCase()
          .includes(searchValue) ||
        order.buyerInfo.name
          .toLowerCase()
          .includes(searchValue) ||
        order.buyerInfo.email
          .toLowerCase()
          .includes(searchValue);

      const matchStatus =
        status === "All" ||
        order.orderStatus.toLowerCase() ===
          status.toLowerCase();

      return matchSearch && matchStatus;
    });
  }, [orders, search, status]);

  return (
   <motion.section
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="min-h-screen bg-orange-50 px-4 py-6 transition-colors duration-300 dark:bg-gray-950 sm:px-6 lg:px-8"
>
  <div className="mx-auto max-w-7xl">
    {/* Header */}

    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8 rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30"
    >
      <h1 className="text-3xl font-bold text-orange-600 sm:text-4xl">
        Manage Orders
      </h1>

      <p className="mt-3 max-w-3xl text-gray-600 transition-colors duration-300 dark:text-gray-400">
        Handle incoming customer orders, update delivery status,
        reject orders when necessary, and view buyer information.
      </p>
    </motion.div>

    {/* Dashboard Stats */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <DashboardStats orders={orders} />
    </motion.div>

    {/* Search */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-8"
    >
      <SearchFilter
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />
    </motion.div>

    {/* Orders */}

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {filteredOrders.length > 0 ? (
        <OrderTable
          orders={filteredOrders}
          onBuyerInfo={openBuyerModal}
          onStatusUpdate={openStatusModal}
          onReject={openRejectModal}
        />
      ) : (
        <div className="rounded-2xl border border-orange-100 bg-white p-10 shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/30">
          <EmptyState />
        </div>
      )}
    </motion.div>
  </div>

  {/* Buyer Info Modal */}

  <BuyerInfoModal
    isOpen={buyerModal}
    onClose={() => setBuyerModal(false)}
    buyer={selectedOrder?.buyerInfo}
  />

  {/* Status Modal */}

  <OrderStatusModal
    isOpen={statusModal}
    order={selectedOrder}
    onClose={() => setStatusModal(false)}
    onSave={handleStatusUpdate}
    loading={loading}
  />

  {/* Reject Modal */}

  <RejectOrderModal
    isOpen={rejectModal}
    onClose={() => setRejectModal(false)}
    onConfirm={handleReject}
    loading={loading}
  />
</motion.section>
  );
}