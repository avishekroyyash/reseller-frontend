"use server";

import { revalidatePath } from "next/cache";
import { serverDelete, serverMutation } from "../mainFunction/server";

export const AdminApproveProduct = async (id) => {
  const result = await serverMutation(`/api/admin/products/${id}`,{ status: "approved" },'PATCH'
  );
  revalidatePath("/dashboard/admin/products");
  return result;
};

export const AdminRejectProduct = async (id) => {
  const result = await serverMutation(`/api/admin/products/${id}`,
    { status: "rejected" },
    'PATCH'
  );
  revalidatePath("/dashboard/admin/products");
  return result;
};

export const AdminDeleteProduct = async (id) => {
  const result = await serverDelete(`/api/admin/products/${id}`);
  revalidatePath("/dashboard/admin/products");
  return result;
};