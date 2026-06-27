"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Magnifier,
  Bell,
  Envelope,
  Gear,
  Person,
} from "@gravity-ui/icons";

import {
  FaShoppingCart,
  FaHeart,
  FaBoxOpen,
  FaStore,
} from "react-icons/fa";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Browse Products",
    href: "/products",
    icon: Magnifier,
  },
  {
    label: "My Listings",
    href: "/dashboard/my-listings",
    icon: FaBoxOpen,
  },
  {
    label: "Wishlist",
    href: "/dashboard/wishlist",
    icon: FaHeart,
  },
  {
    label: "Cart",
    href: "/dashboard/cart",
    icon: FaShoppingCart,
  },
  {
    label: "Messages",
    href: "/dashboard/messages",
    icon: Envelope,
  },
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: Person,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Gear,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className=" w-82 min-h-screen bg-white border-r border-orange-100 shadow-sm">

      {/* Logo */}

      <div className="border-b border-orange-100 p-6">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white">
            <FaStore />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500">
              ReBazar
            </h2>

            <p className="text-sm text-gray-500">
              Buy • Sell • Reuse
            </p>
          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="p-5 space-y-2">

        {navItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition
              ${
                active
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-50 text-gray-700"
              }`}
            >
              <Icon
                className={`text-xl ${
                  active ? "text-white" : "text-orange-500"
                }`}
              />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}