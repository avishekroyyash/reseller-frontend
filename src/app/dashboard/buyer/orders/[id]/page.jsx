
import OrderDetailsPage from "@/Component/BuyerOrder/OrderDetailsPage";
import { GetSingleOrderById } from "@/lib/apiGetCall/GetBuyerSingleOrder";



export default async function Page({ params }) {
  const {id} = await params
//   console.log(id,'param');
   const order =await GetSingleOrderById(id)
//    console.log(order,'ORDER-PARAM');
  return <OrderDetailsPage order={order} />;
}