"use client";

import PaymentCard from "@/Component/BuyerPayment/PaymentCard";
import { useEffect, useState } from "react";


export default function PaymentHistory() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-6xl mx-auto p-6">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-orange-600">
            Payment History
          </h1>

          <p className="text-gray-500 mt-2">
            View all your payment transactions.
          </p>
        </div>

        {/* ================= Statistics Cards ================= */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-xl p-5 shadow">
            <p className="text-gray-500">Total Payments</p>
            <h1 className="text-3xl font-bold text-orange-600">
              {payments.length}
            </h1>
          </div>

          <div className="bg-white rounded-xl p-5 shadow">
            <p className="text-gray-500">Successful</p>
            <h1 className="text-3xl font-bold text-green-600">
              {payments.filter(p => p.paymentStatus === "success").length}
            </h1>
          </div>

          <div className="bg-white rounded-xl p-5 shadow">
            <p className="text-gray-500">Total Spent</p>
            <h1 className="text-3xl font-bold text-orange-600">
              ৳
              {payments.reduce(
                (total, p) => total + Number(p.amount),
                0
              )}
            </h1>
          </div>

        </div>
        {/* ================= End Statistics ================= */}

        {/* Payment Cards */}
        <div className="space-y-5">
          {payments.map((payment) => (
            <PaymentCard
              key={payment.transactionId}
              payment={payment}
            />
          ))}
        </div>

      </div>
    </div>
  );
}