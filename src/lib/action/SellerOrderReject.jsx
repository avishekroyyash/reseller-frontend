'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../mainFunction/server";

export async function SellerOrderReject(id, reason) {

  const data = await serverMutation(`/api/orders/${id}/reject`,{reason,},'PATCH')

  revalidatePath("/dashboard/seller/orders");

  return data;
}