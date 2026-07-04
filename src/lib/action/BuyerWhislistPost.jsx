import { serverMutation } from "../mainFunction/server"


export const BuyerWishlistPost = (data)=>{
    return serverMutation('/api/wishlist',data)
}