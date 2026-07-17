import { requireRole } from '@/lib/mainFunction/session';
import React from 'react';

const BuyerLayout =async({children}) => {
    await requireRole('buyer')
    return children
};

export default BuyerLayout;