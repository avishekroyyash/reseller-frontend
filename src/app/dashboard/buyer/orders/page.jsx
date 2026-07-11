import OrdersClient from "@/Component/BuyerOrder/OrdersClient";
import { GetOrderById } from "@/lib/apiGetCall/GetBuyerOrder";
import { getUserData } from "@/lib/mainFunction/session";


export default async function MyOrdersPage() {
  // Fetch from your backend or database
   const user = await getUserData()
  const orders = await GetOrderById(user?.id)
//  console.log(orders,'ALL-ORDER');
  return <OrdersClient orders={orders} />;
}