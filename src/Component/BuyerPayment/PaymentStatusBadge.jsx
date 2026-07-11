export default function PaymentStatusBadge({ status }) {
  const isSuccess = status === "success";

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mt-2
      ${
        isSuccess
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {isSuccess ? "✓ Success" : "✕ Failed"}
    </span>
  );
}