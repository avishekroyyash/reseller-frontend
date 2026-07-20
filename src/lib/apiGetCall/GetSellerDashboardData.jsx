// import { serverFetch } from "../mainFunction/server";

import { secureFetch } from "../mainFunction/server";


// export async function GetSellerDashboardData(sellerId) {
//     return serverFetch(`/api/seller/dashboard/${sellerId}`)

// }




export async function GetSellerDashboardData(sellerId) {
    return secureFetch(`/api/seller/dashboard/${sellerId}`)

}
