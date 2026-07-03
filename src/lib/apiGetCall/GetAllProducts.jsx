import { serverFetch } from "../mainFunction/server";

export const GetAllProducts = async (query = "") => {
  return serverFetch(`/api/products${query}`);
};