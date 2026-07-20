// import { serverFetch } from "../mainFunction/server"

// export const GetAllDataForBuyerDashBoard = async(id)=>{
//     return serverFetch(`/api/buyer/dashboard/${id}`)
// }

import { secureFetch } from "../mainFunction/server"

export const GetAllDataForBuyerDashBoard = async(id)=>{
    return secureFetch(`/api/buyer/dashboard/${id}`)
}