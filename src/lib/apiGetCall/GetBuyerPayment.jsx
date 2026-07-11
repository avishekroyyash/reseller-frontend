import { serverFetch } from "../mainFunction/server"

export const GetBuyerPayment = (id)=>{
    return serverFetch(`/api/payment/${id}`)
}