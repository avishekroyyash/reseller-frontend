import PaymentHistoryClient from "@/Component/Buyer-Component/PaymentHistoryClient";
import { GetBuyerPayment } from "@/lib/apiGetCall/GetBuyerPayment";
import { getUserData } from "@/lib/mainFunction/session";


export default async function PaymentHistory() {
  const user = await getUserData();

  const payments = await GetBuyerPayment(user?.id);

  return <PaymentHistoryClient payments={payments} />;
}