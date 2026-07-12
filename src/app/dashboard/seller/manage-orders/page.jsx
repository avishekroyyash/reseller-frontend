
import { getUserData } from "@/lib/mainFunction/session";

import OrdersPage from "@/Component/SellerOrders/OrdersPage";
import { getSellerOrders } from "@/lib/apiGetCall/GetSellerOrders";

export default async function SellerOrdersPage() {
  const user = await getUserData();

  const orders = await getSellerOrders(user?.id);

  return <OrdersPage orders={orders} />;
}