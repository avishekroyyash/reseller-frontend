'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../mainFunction/server";


export const SellerOrderUpdate = async(id, status) => {
//        console.log(id,'ID');
//    console.log(status,'STATUS');
   const data = await serverMutation(`/api/orders/${id}/status`,  {
    status,
  },'PATCH')

  revalidatePath("/dashboard/seller/manage-orders");

  return data;
}
