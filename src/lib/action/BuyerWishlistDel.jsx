'use server'
import { revalidatePath } from "next/cache"
import { serverDelete } from "../mainFunction/server"


export const BuyerWishlistDel = async (id) => {
  const result = await serverDelete(`/api/wishlist/${id}`);

  revalidatePath("/dashboard/buyer/wishlist");

  return result;
};