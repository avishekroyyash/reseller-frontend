'use server'
import { revalidatePath } from "next/cache"
import { serverMutation } from "../mainFunction/server"


export const ReviewPost = async(data)=>{
    const result = await serverMutation('/api/review',data)
    revalidatePath(`/all-products/${data.productId}`)
    return result
}