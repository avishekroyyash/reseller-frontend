import { requireRole } from '@/lib/mainFunction/session';
import React from 'react';

const AdminLayout =async({children}) => {
    await requireRole('admin')
    return children
};
export default AdminLayout;