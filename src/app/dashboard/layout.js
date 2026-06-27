import DashboardDrawer from '@/Component/DashboardComponent/Drawer';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <DashboardDrawer></DashboardDrawer>
         <div className='flex-1 p-6'>
            {children}
         </div>
        </div>
    );
};

export default DashboardLayout;