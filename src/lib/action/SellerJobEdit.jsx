'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../mainFunction/server"

export const sellerJobEdit = async(id,data)=>{
    return serverMutation(`/api/products/${id}`,data,'PATCH');
    revalidatePath('/dashboard/seller/my-products')
}