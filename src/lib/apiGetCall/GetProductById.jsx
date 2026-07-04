import { serverFetch } from "../mainFunction/server"

export const GetproductById = async(id)=>{
    return serverFetch(`/api/products/${id}`)
}