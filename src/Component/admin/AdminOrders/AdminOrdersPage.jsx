"use client";

import { useEffect, useMemo, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";


import OrderToolbar from "./OrderToolbar";
import OrderStats from "./OrderStats";
import EmptyState from "@/Component/SellerOrders/EmptyState";
import OrderTable from "./OrderTable";
import { GetAllOrders } from "@/lib/apiGetCall/GetAllOrder";
import OrderDetailsModal from "./OrderDetailsModal";
import UpdateStatusModal from "./UpdateStatusModal";
import DisputeModal from "./DisputeModal";
import LoadingSkeleton from "./LoadingSkeleton";

// Components (We'll create these in Part 2)


export default function AdminOrdersPage() {
    const [disputeOpen, setDisputeOpen] = useState(false);
const [statusModalOpen, setStatusModalOpen] = useState(false);
const [selectedOrder, setSelectedOrder] = useState(null);
const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const loadOrders = async () => {
    setLoading(true);

    const data = await GetAllOrders();

    setOrders(Array.isArray(data) ? data : []);

    setLoading(false);
  };

  useEffect(() => {
    loadOrders();
  }, []);


const handleViewOrder = (order) => {
  setSelectedOrder(order);
  setIsDetailsOpen(true);
};
const handleUpdate = (order) => {
  setSelectedOrder(order);

  setStatusModalOpen(true);
};
const handleDispute = (order) => {
  setSelectedOrder(order);
  setDisputeOpen(true);
};

  // Filtering
  const filteredOrders = useMemo(() => {
    let result = [...orders];

    if (search) {
      const text = search.toLowerCase();

      result = result.filter((order) => {
        return (
          order?.productInfo?.productTitle
            ?.toLowerCase()
            .includes(text) ||
          order?.buyerInfo?.name
            ?.toLowerCase()
            .includes(text) ||
          order?.sellerInfo?.name
            ?.toLowerCase()
            .includes(text)
        );
      });
    }

    if (statusFilter !== "all") {
      result = result.filter(
        (order) => order.orderStatus === statusFilter
      );
    }

    if (paymentFilter !== "all") {
      result = result.filter(
        (order) => order.paymentStatus === paymentFilter
      );
    }

    result.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }

      return new Date(a.createdAt) - new Date(b.createdAt);
    });

    return result;
  }, [
    orders,
    search,
    statusFilter,
    paymentFilter,
    sortBy,
  ]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <section className="space-y-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Manage Orders
          </h1>

          <p className="text-gray-500 mt-1">
            Monitor every order across the marketplace.
          </p>
        </div>

        <button
          onClick={loadOrders}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl transition"
        >
          <FiRefreshCw />

          Refresh
        </button>
      </div>

      {/* Toolbar */}

      <OrderToolbar
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        paymentFilter={paymentFilter}
        setPaymentFilter={setPaymentFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Statistics */}

      <OrderStats orders={filteredOrders} />

      {/* Table */}

      {filteredOrders.length === 0 ? (
        <EmptyState />
      ) : (
       <OrderTable
  orders={filteredOrders}
  onView={handleViewOrder}
  onUpdate={handleUpdate}
  onDispute={handleDispute}
/>
      )}


<OrderDetailsModal
  isOpen={isDetailsOpen}
  order={selectedOrder}
  onClose={() => {
    setIsDetailsOpen(false);
    setSelectedOrder(null);
  }}
/>

<UpdateStatusModal
    isOpen={statusModalOpen}
    order={selectedOrder}
    onClose={()=>{
        setStatusModalOpen(false);
        setSelectedOrder(null);
    }}
    onSuccess={loadOrders}
/>
<DisputeModal
  isOpen={disputeOpen}
  order={selectedOrder}
  onClose={() => {
    setDisputeOpen(false);
    setSelectedOrder(null);
  }}
  onSuccess={loadOrders}
/>

    </section>
  );
}