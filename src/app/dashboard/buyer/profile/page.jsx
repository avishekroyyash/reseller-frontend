
import ProfileCard from "@/Component/BuyerProfile/ProfileCard";
import ProfileForm from "@/Component/BuyerProfile/ProfileForm";
import { getUserData } from "@/lib/mainFunction/session";



export default async function ProfilePage() {

    const user = await getUserData()
    // console.log(user,'USER');
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/profile")
//       .then(res => res.json())
//       .then(data => setUser(data));
//   }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 py-10">
      <div className="max-w-7xl mx-auto px-5">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-orange-600">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your personal information
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <ProfileCard user={user} />

          <div className="lg:col-span-2">
            <ProfileForm user={user} />
          </div>

        </div>

      </div>
    </div>
  );
}