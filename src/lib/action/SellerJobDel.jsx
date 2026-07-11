'use server'
import { revalidatePath } from "next/cache"
import { serverDelete } from "../mainFunction/server"


export const sellerJobDelete =async(id)=>{
const result = await serverDelete(`/api/products/${id}`)
revalidatePath('/dashboard/seller/my-products')
return result
}