import { serverFetch } from "../mainFunction/server"

export const GetAllProducts = async()=>{
    return serverFetch('/api/products')
}