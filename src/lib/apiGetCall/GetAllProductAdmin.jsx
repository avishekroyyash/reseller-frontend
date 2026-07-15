import { serverFetch } from "../mainFunction/server";


export const GetAllProducts = async () => {
  return await serverFetch("/api/admin/products");
};