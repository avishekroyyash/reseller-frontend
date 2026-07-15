'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../mainFunction/server";



export const UpdateOrderStatus = async (id, status) => {
    const result = await serverMutation(`/api/admin/orders/${id}/status`,{status},'PATCH')

revalidatePath('/dashboard/admin/orders');
return result ;
};


export const ResolveDispute = async (
  id,
  adminNote,
  resolved
) => {
    const result = await serverMutation(`/api/admin/orders/${id}/dispute`,{
        adminNote,
        resolved,
      },'PATCH')
revalidatePath('/dashboard/admin/orders');
return result ;
};