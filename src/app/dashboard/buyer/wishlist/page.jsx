

import WishlistTable from '@/Component/Buyer-Component/WishlistTable';
import { GetBuyerAllWishlistById } from '@/lib/apiGetCall/GetBuyerAllWishlist';
import { getUserData } from '@/lib/mainFunction/session';
import React from 'react';

const WishlistPage = async () => {
    const user = await getUserData()
    //console.log(user,'USER');
    const wishlist = await GetBuyerAllWishlistById(user?.id)
    // console.log(wishlist,'Whislist');
    return (
        <div>

            <div >
                {
                    <WishlistTable products={wishlist}
                    />

                }
            </div>
        </div>
    );
};

export default WishlistPage;