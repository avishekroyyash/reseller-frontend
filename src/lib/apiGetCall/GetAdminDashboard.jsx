// import { serverFetch } from "../mainFunction/server";

// export async function GetAdminDashboard() {
//   return serverFetch('/api/admin/dashboard')
// }

import { secureFetch} from "../mainFunction/server";

export async function GetAdminDashboard() {
  return secureFetch('/api/admin/dashboard')
}