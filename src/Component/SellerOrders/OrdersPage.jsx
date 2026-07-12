"use client";

import { useMemo, useState } from "react";
import EmptyState from "./EmptyState";
import DashboardStats from "./DashboardStats";
import SearchFilter from "./SearchFilter";
import OrderTable from "./OrderTable";



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
    <section className="min-h-screen bg-orange-50 p-5">

      <div className="max-w-7xl mx-auto">

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-orange-600">
            Manage Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Handle incoming customer orders, update
            delivery status and view buyer details.
          </p>

        </div>

        <DashboardStats orders={orders} />

        <SearchFilter
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        {filteredOrders.length > 0 ? (
        <OrderTable
  orders={filteredOrders}
  onBuyerInfo={openBuyerModal}
  onStatusUpdate={openStatusModal}
  onReject={openRejectModal}
/>
        ) : (
          <EmptyState />
        )}

      </div>

<BuyerInfoModal
  isOpen={buyerModal}
  onClose={() => setBuyerModal(false)}
  buyer={selectedOrder?.buyerInfo}
/>

<OrderStatusModal
  isOpen={statusModal}
  order={selectedOrder}
  onClose={() => setStatusModal(false)}
  onSave={handleStatusUpdate}
  loading={loading}
/>
<RejectOrderModal
  isOpen={rejectModal}
  onClose={() => setRejectModal(false)}
  onConfirm={handleReject}
  loading={loading}
/>
    </section>
  );
}