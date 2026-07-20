// import { serverFetch } from "../mainFunction/server"

// export const getSellerOrders = async(id)=>{
//     return serverFetch(`/api/order/${id}`)
// }



import { secureFetch } from "../mainFunction/server"

export const getSellerOrders = async(id)=>{
    return secureFetch(`/api/order/${id}`)
}