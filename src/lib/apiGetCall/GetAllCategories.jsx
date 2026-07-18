import { serverFetch } from "../mainFunction/server";

export const GetAllCategories = async () => {
    return serverFetch('/api/categories')
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/categories`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch categories");
//   }

//   return res.json();
};