 "use client";

import { useEffect } from "react";

export default function OrderDetailsModal({ order, isOpen, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !order) return null;

  const seller = order.sellerInfo || order.seller || {};
  const buyer = order.buyerInfo || {};
  const product = order.product || {};

  const Item = ({label,value}) => (
    <div className="rounded-xl bg-orange-50 border border-orange-100 p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 break-all font-medium">{value || "-"}</p>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div onClick={(e)=>e.stopPropagation()} className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
          <div className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-4 text-white">
            <div>
              <h2 className="text-2xl font-bold">Order Details</h2>
              <p className="text-sm text-orange-100">Complete order information</p>
            </div>
            <button onClick={onClose} className="h-10 w-10 rounded-full hover:bg-white/20">✕</button>
          </div>

          <div className="p-5 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <img src={product.image} alt={product.title} className="h-64 sm:h-80 lg:h-[420px] w-full rounded-2xl border object-cover"/>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500">Product</p>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Item label="Price" value={`$${product.price}`}/>
                  <Item label="Payment" value={order.paymentStatus}/>
                  <Item label="Status" value={order.orderStatus}/>
                  <Item label="Ordered" value={new Date(order.createdAt).toLocaleString()}/>
                </div>

                <div>
                  <h4 className="mb-2 font-bold">Seller</h4>
                  <div className="rounded-xl border p-4 space-y-1">
                    <p><b>Name:</b> {seller.name}</p>
                    <p><b>Email:</b> {seller.email}</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-bold">Buyer</h4>
                  <div className="rounded-xl border p-4 space-y-1">
                    <p><b>Name:</b> {buyer.name}</p>
                    <p><b>Email:</b> {buyer.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold">Technical Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Item label="Order ID" value={order._id}/>
              <Item label="Product ID" value={order.productId}/>
              <Item label="Payment Intent" value={order.paymentIntentId}/>
              <Item label="Stripe Session" value={order.stripeSessionId}/>
            </div>

            <div className="mt-8 flex justify-center sm:justify-end">
              <button onClick={onClose} className="w-full rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600 sm:w-auto">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
