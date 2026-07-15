"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Bell,
  Envelope,
  Gear,
  Person,
  ShoppingCart,
  LayoutSideContentLeft,
  Persons,
  ChartColumn,
  Plus,
} from "@gravity-ui/icons";

import { FaStore } from "react-icons/fa";
import { useSession } from "@/lib/auth-client";



const dashboardLinks = {
  buyer: [
    {
      label: "Dashboard",
      href: "/dashboard/buyer",
      icon: House,
    },
    {
      label: "My Orders",
      href: "/dashboard/buyer/orders",
      icon: ShoppingCart,
    },
    {
      label: "Wishlist",
      href: "/dashboard/buyer/wishlist",
      icon: LayoutSideContentLeft,
    },
    {
      label: "PaymentHistory",
      href: "/dashboard/buyer/payment-history",
      icon: Envelope,
    },
    {
      label: "Profile",
      href: "/dashboard/buyer/profile",
      icon: Person,
    },
  ],

  seller: [
    {
      label: "Dashboard",
      href: "/dashboard/seller",
      icon: House,
    },
      {
      label: "Add Product",
      href: "/dashboard/seller/add-product",
      icon:Plus,
    },
    {
      label: "My Products",
      href: "/dashboard/seller/my-products",
      icon: LayoutSideContentLeft,
    },
    {
      label: "Manage Orders",
      href: "/dashboard/seller/manage-orders",
      icon: ShoppingCart,
    },
   {
      label: "Buyer Analytics",
      href: "/dashboard/seller/analytics",
      icon: ChartColumn,
    },
    {
      label: "Profile",
      href: "/dashboard/seller/profile",
      icon: Person,
    },
  ],

  admin: [
    {
      label: "Dashboard",
      href: "/dashboard/admin",
      icon: House,
    },
    {
      label: "Manage Users",
      href: "/dashboard/admin/users",
      icon: Persons,
    },
    {
      label: "Manage Products",
      href: "/dashboard/admin/products",
      icon: LayoutSideContentLeft,
    },
        {
      label: "Manage Orders",
      href: "/dashboard/admin/orders",
      icon: Gear,
    },
    {
      label: "Admin Analysis",
      href: "/dashboard/admin/analysis",
      icon: ChartColumn,
    },
     {
      label: "Profile",
      href: "/dashboard/admin/profile",
      icon: Person,
    },
  ],
};

export default function DashboardSidebar() {
     // take user 
      const {data} = useSession();
      const user = data?.user
      const role = user?.role || "buyer";
      //console.log(user)

  const pathname = usePathname();

  const navItems = dashboardLinks[role] || dashboardLinks.buyer;

  return (
<aside className="w-30 md:w-56 lg:w-72 min-h-screen bg-white border-r border-orange-100 shadow-sm transition-all duration-300">
      {/* Logo */}

      <div className="border-b border-orange-100 p-4 lg:p-6">
  <div className="flex items-center justify-center lg:justify-start gap-3">

    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shrink-0">
      <FaStore />
    </div>

    <div className="hidden lg:block">
      <h2 className="text-2xl font-bold text-orange-500">
        ReBazar
      
      </h2>
       <p className="font-bold text-sm text-gray-500 capitalize"> {user?.name}</p>
      <p className="text-sm text-gray-500 capitalize">
         
        {role} Dashboard
      </p>
    </div>

  </div>
</div>

      {/* Navigation */}

    <nav className="p-3 lg:p-5 space-y-2">

        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
     <Link
  key={item.label}
  href={item.href}
  className={`flex items-center justify-center lg:justify-start rounded-xl px-4 py-3 transition-all duration-300
    ${
      active
        ? "bg-orange-500 text-white shadow-md"
        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
    }`}
>
  {/* Show icon only on large screens */}
  <Icon
    className={`hidden lg:block text-xl shrink-0 mr-4 ${
      active ? "text-white" : "text-orange-500"
    }`}
  />

  {/* Show label on all screens */}
  <span className="font-medium text-sm lg:text-base text-center lg:text-left">
    {item.label}
  </span>
</Link>
          );
        })}
      </nav>
    </aside>
  );
}