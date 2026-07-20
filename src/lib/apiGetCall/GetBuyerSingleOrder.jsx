import { serverFetch } from "../mainFunction/server"


export const GetSingleOrderById = (id)=>{
    return serverFetch(`/app/order1/${id}`)
}