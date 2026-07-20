import ProfilePageClient from "@/Component/seller-componet/ProfilePageClient";
import { getUserData } from "@/lib/mainFunction/session";


export default async function ProfilePage() {
  const user = await getUserData();

  return <ProfilePageClient user={user} />;
}