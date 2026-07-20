// import { serverFetch } from "../mainFunction/server"

import { secureFetch } from "../mainFunction/server"

// export const GetBuyerPayment = (id)=>{
//     return serverFetch(`/api/payment/${id}`)
// }



export const GetBuyerPayment = (id)=>{
    return secureFetch(`/api/payment/${id}`)
}