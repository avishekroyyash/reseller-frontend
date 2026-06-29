import SellerStatsCards from '@/Component/seller-componet/SellerStatsCard';
import { getUserData } from '@/lib/mainFunction/session';
import React from 'react';

const SellerHomepage = async() => {
    const user = await getUserData()
    return (
        <div>
          <h1>this is home of seller</h1>
           {/* <SellerStatsCards
  stats={{
    totalProducts: seller.totalProducts,
    totalSales: seller.totalSales,
    totalRevenue: seller.totalRevenue,
    pendingOrders: seller.pendingOrders,
  }}
/> */}
        </div>
    );
};

export default SellerHomepage;