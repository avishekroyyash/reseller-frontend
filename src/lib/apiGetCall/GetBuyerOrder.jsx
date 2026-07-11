import { serverFetch } from "../mainFunction/server"

export const GetOrderById = (id)=>{
    return serverFetch(`/app/order/${id}`)
}