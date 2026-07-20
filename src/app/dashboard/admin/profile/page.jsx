
import ProfilePageClient from "@/Component/BuyerProfile/ProfilePageClient";
import { getUserData } from "@/lib/mainFunction/session";


export default async function ProfilePage(){

  const user=await getUserData();


  if(!user){

    return(
      <div className="min-h-screen flex items-center justify-center bg-orange-50 dark:bg-gray-950">
        Loading...
      </div>
    );

  }


  return(
    <ProfilePageClient user={user}/>
  );
}