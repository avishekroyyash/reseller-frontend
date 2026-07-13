import { serverFetch } from "../mainFunction/server";


export async function GetSellerDashboardData(sellerId) {
    return serverFetch(`/api/seller/dashboard/${sellerId}`)

}