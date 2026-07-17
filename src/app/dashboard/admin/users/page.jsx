
import UserManagement from "@/Component/admin/user/UserManagement";
import { GetAllUser } from "@/lib/apiGetCall/GetAllUser";


export default async function ManageUsersPage() {
  const users = await GetAllUser();

  return <UserManagement initialUsers={users} />;
}