'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../mainFunction/server"

export const sellerJobEdit = async(id,data)=>{
    const result = await serverMutation(`/api/products/${id}`,data,'PATCH');
    revalidatePath('/dashboard/seller/my-products')
    return result
}