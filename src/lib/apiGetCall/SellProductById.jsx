// import { serverFetch } from "../mainFunction/server"

import { secureFetch } from "../mainFunction/server"


// export const getProductBySellerId = async(id)=>{
//     return serverFetch(`/api/products/seller/${id}`)
// }


export const getProductBySellerId = async(id)=>{
    return secureFetch(`/api/products/seller/${id}`)
}