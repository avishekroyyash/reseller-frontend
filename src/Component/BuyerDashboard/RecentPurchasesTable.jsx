import Image from "next/image";
import PurchaseStatusBadge from "./PurchaseStatusBadge";

export default function RecentPurchasesTable({ purchases }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recent Purchases
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Product
              </th>

              <th className="text-left py-3">
                Price
              </th>

              <th className="text-left py-3">
                Status
              </th>

              <th className="text-left py-3">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {purchases.map((item) => (

              <tr
                key={item._id}
                className="border-b"
              >

                <td className="py-4">

                  <div className="flex items-center gap-3">

                    <Image
                      src={item.productInfo.productImage}
                      alt={item.productInfo.productTitle}
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />

                    <span>
                      {item.productInfo.productTitle}
                    </span>

                  </div>

                </td>

                <td>
                  ৳{item.productInfo.productPrice}
                </td>

                <td>
                  <PurchaseStatusBadge
                    status={item.orderStatus}
                  />
                </td>

                <td>
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}