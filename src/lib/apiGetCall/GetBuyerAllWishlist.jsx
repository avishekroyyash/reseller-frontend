import { serverFetch } from "../mainFunction/server"

export const GetBuyerAllWishlistById = async(id)=>{
    return serverFetch(`/api/wishlist/${id}`)
}