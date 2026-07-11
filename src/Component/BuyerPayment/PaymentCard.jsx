import PaymentStatusBadge from "./PaymentStatusBadge";

export default function PaymentCard({ payment }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-orange-100 hover:shadow-xl transition">

      <div className="flex justify-between items-center p-6 border-b">

        <div>
          <h2 className="font-semibold text-lg">
            Transaction
          </h2>

          <p className="text-gray-500 text-sm">
            {payment.transactionId}
          </p>
        </div>

        <div className="text-right">

          <h1 className="text-2xl font-bold text-orange-600">
            ৳{payment.amount}
          </h1>

          <PaymentStatusBadge
            status={payment.paymentStatus}
          />

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-5 p-6">

        <div>

          <p className="text-gray-500 text-sm">
            Buyer Name
          </p>

          <h3 className="font-medium">
            {payment.userName}
          </h3>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Email
          </p>

          <h3 className="font-medium">
            {payment.userEmail}
          </h3>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Order ID
          </p>

          <h3 className="font-medium break-all">
            {payment.orderId}
          </h3>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Payment Date
          </p>

          <h3 className="font-medium">
            {new Date(payment.createdAt).toLocaleString()}
          </h3>

        </div>

      </div>

    </div>
  );
}