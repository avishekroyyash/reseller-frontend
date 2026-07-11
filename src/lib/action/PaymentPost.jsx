import { serverMutation } from "../mainFunction/server"

export const UserPaymentPost = (data)=>{
    return serverMutation('/api/payment',data)
}