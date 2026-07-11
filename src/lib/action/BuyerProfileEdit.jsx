'use server'

import { revalidatePath } from "next/cache"
import { serverMutation } from "../mainFunction/server"

export  const BuyerProfileUpdate =async(id,data)=>{
    return serverMutation(`/api/user/${id}`,data,'PATCH')
    revalidatePath('/dashboard/buyer/profile')
}