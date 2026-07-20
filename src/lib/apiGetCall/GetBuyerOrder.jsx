// import { serverFetch } from "../mainFunction/server"

import { secureFetch } from "../mainFunction/server"

// export const GetOrderById = (id)=>{
//     return serverFetch(`/app/order/${id}`)
// }



export const GetOrderById = (id)=>{
    return secureFetch(`/app/order/${id}`)
}