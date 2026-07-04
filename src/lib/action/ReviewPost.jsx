import { serverMutation } from "../mainFunction/server"


export const ReviewPost = (data)=>{
    return serverMutation('/api/review',data)
}