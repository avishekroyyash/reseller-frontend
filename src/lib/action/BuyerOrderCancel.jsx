'use server'
import { revalidatePath } from "next/cache"
import { serverMutation } from "../mainFunction/server"


export const BuyerOrderCancel =async (id,data)=>{
    const result = await serverMutation(`/api/orders/${id}/cancel`,data,'PATCH')
    revalidatePath('/dashboard/buyer/orders')
    return result
}