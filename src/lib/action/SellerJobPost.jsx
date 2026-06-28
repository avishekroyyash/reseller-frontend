import { serverMutation } from "../mainFunction/server"

export const sellerJobPost = async(data)=>{
return serverMutation('/api/products',data)
}