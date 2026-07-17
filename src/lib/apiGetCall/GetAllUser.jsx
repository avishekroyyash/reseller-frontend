// import { serverFetch } from "../mainFunction/server";

import { secureFetch } from "../mainFunction/server"



export const GetAllUser = async()=>{
    return secureFetch('/api/admin/users')
}