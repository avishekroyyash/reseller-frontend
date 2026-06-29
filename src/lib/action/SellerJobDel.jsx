'use server'
import { revalidatePath } from "next/cache"
import { serverDelete } from "../mainFunction/server"


export const sellerJobDelete =async(id)=>{
return serverDelete(`/api/products/${id}`)
revalidatePath('/dashboard/seller/my-products')
}