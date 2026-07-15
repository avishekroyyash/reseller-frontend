'use server'

import { revalidatePath } from "next/cache"
import { serverDelete, serverMutation } from "../mainFunction/server"

//admin update user data
export  const AdminUpdateUserData =async(id,data)=>{
    const result = await serverMutation(`/api/admin/${id}`,data,'PATCH')
       revalidatePath('/dashboard/admin/users')
       return result
}
//admin delete user data
export const AdminDeleteUserData =async(id)=>{
const result = await serverDelete(`/api/admin/${id}`)
revalidatePath('/dashboard/admin/users')
return result
}
// admin update user status 
export const AdminUserStatusUpdate = async (id, status) => {
  const result = await serverMutation(`/api/admin/${id}`,{ status },
    'PATCH'
  );

  revalidatePath("/dashboard/admin/users");

  return result;
};