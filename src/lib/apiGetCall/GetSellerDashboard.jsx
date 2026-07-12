/* ===========================
   Dashboard Stats
=========================== */

export async function getSellerDashboard(sellerId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/seller/dashboard/${sellerId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

/* =======================