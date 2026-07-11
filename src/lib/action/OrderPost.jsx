import { serverMutation } from "../mainFunction/server"


export const UserOrderPost =(data)=>{
    // console.log(data,'VERIFY-FUNCTION');
    return serverMutation('/api/order',data)
}