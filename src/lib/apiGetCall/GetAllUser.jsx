import { serverFetch } from "../mainFunction/server";



export const GetAllUser = async()=>{
    return serverFetch('/api/admin/users')
}