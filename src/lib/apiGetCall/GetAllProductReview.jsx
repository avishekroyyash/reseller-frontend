import { serverFetch } from "../mainFunction/server"

export const GetAllProductReview = (id) =>{
    return serverFetch(`/api/review/${id}`)
}