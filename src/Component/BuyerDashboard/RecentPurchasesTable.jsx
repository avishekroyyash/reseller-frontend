import Image from "next/image";
import PurchaseStatusBadge from "./PurchaseStatusBadge";

export default function RecentPurchasesTable({ purchases }) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-gray-200
        dark:border-gray-800
        bg-white
        dark:bg-gray-900
        shadow-lg
        transition-colors
        duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4 py-5 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Recent Purchases
        </h2>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden p-4 space-y-4">
        {purchases.map((item) => (
          <div
            key={item._id}
            className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800"
          >
            <div className="flex gap-3">
              <Image
                src={item.productInfo.productImage}
                alt={item.productInfo.productTitle}
                width={65}
                height={65}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {item.productInfo.productTitle}
                </h3>

                <p className="mt-2 text-orange-600 dark:text-orange-400 font-bold">
                  ৳{item.productInfo.productPrice}
                </p>

                <div className="mt-3">
                  <PurchaseStatusBadge
                    status={item.orderStatus}
                  />
                </div>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                Price
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {purchases.map((item) => (
              <tr
                key={item._id}
                className="
                  border-b
                  border-gray-200
                  dark:border-gray-800
                  hover:bg-orange-50
                  dark:hover:bg-gray-800
                  transition-colors
                "
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.productInfo.productImage}
                      alt={item.productInfo.productTitle}
                      width={55}
                      height={55}
                      className="rounded-lg object-cover"
                    />

                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.productInfo.productTitle}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-orange-600 dark:text-orange-400">
                  ৳{item.productInfo.productPrice}
                </td>

                <td className="px-6 py-4">
                  <PurchaseStatusBadge
                    status={item.orderStatus}
                  />
                </td>

                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}