import { serverFetch } from "../mainFunction/server";

export const GetAllOrders = async () => {
  return serverFetch('/api/admin/orders')
};