import { serverFetch } from "../mainFunction/server"


export const getProductBySellerId = async(id)=>{
    return serverFetch(`/api/products/seller/${id}`)
}