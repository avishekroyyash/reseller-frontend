// import { serverFetch } from "../mainFunction/server";

import { secureFetch } from "../mainFunction/server";

// export const GetAllOrders = async () => {
//   return serverFetch('/api/admin/orders')
// };




export const GetAllOrders = async () => {
  return secureFetch('/api/admin/orders')
};