// import { serverFetch } from "../mainFunction/server"

import { secureFetch } from "../mainFunction/server"

// export const GetBuyerAllWishlistById = async(id)=>{
//     return serverFetch(`/api/wishlist/${id}`)
// }



export const GetBuyerAllWishlistById = async(id)=>{
    return secureFetch(`/api/wishlist/${id}`)
}