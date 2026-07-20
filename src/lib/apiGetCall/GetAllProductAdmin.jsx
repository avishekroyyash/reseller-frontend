// import { serverFetch } from "../mainFunction/server";

import { secureFetch } from "../mainFunction/server";


// export const GetAllProducts = async () => {
//   return await serverFetch("/api/admin/products");
// };




export const GetAllProducts = async () => {
  return await secureFetch("/api/admin/products");
};