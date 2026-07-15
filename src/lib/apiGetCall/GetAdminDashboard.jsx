import { serverFetch } from "../mainFunction/server";

export async function GetAdminDashboard() {
  return serverFetch('/api/admin/dashboard')
}