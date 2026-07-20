"use client";


import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaStore,
  FaUserCircle,
  FaChevronDown,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { signOut, useSession } from "@/lib/auth-client";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

export default function Navber() {
  // take user 
  const {data} = useSession();
  const user = data?.user
  //console.log(user)

const isLoggedIn = user;  
 {isLoggedIn ? true : false }

  

  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-orange-500"
        >
          <FaStore />
          ReBazaar
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 font-medium lg:flex">
          <Link href="/" className="hover:text-orange-500 transition text-gray-700 dark:text-gray-200">
            Home
          </Link>

          <Link
            href="/all-products"
           className="hover:text-orange-500 transition text-gray-700 dark:text-gray-200"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="hover:text-orange-500 transition text-gray-700 dark:text-gray-200"
          >
            Categories
          </Link>

          {isLoggedIn && (
            <Link
              href={`/dashboard/${user?.role}`}
              className="hover:text-orange-500 transition text-gray-700 dark:text-gray-200"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">

       <button
  onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
  }
  className="rounded-full border border-orange-300 p-2 hover:bg-orange-100 dark:hover:bg-gray-700 transition"
>
  {theme === "dark" ? (
  <FaSun className="text-yellow-400 text-lg" />
) : (
  <FaMoon className="text-slate-700 dark:text-white text-lg" />
)}
</button>

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-orange-500 px-4 py-2 text-orange-500 hover:bg-orange-50 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
               className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:border-orange-500 transition"
              >
                  <h1>Hi,{user?.name}</h1>
                  {/* {user?.image ? <Image src={user?.image} alt={user?.name[0]} width={20} height={20}></Image> :   <FaUserCircle className="text-2xl text-orange-500" />  } */}
                   <FaUserCircle className="text-2xl text-orange-500" /> 
              
                <FaChevronDown className="text-sm" />
               
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-3 w-52 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                  <Link
                    href={`/dashboard/${user.role}/profile`} className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-700 transition"
                  >
                   
                    My Profile
                  </Link>

                  <Link
                    href={`/dashboard/${user.role}`}
                    className="block px-5 py-3 text-gray-700 dark:text-white hover:bg-orange-50 dark:hover:bg-gray-700 transition"
                  >
                    Dashboard
                  </Link>

                  <button onClick={async () => {
    await signOut();
    window.location.href = "/";
  }} className="w-full px-5 py-3 text-left dark:hover:bg-gray-700 hover:bg-orange-50">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>



        {/* Mobile Button */}



       <div className="relative lg:hidden flex justify-center items-center gap-2">
         <button
  onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
  }
  className="flex items-center justify-between rounded-lg border px-4 py-2"
>

  {theme === "dark" ? (
    <FaSun className="text-yellow-400" />
  ) : (
    <FaMoon />
  )}
</button>
       
{
    !isLoggedIn ? <>
      <button
  className="text-2xl lg:hidden"
  onClick={() => setMobileMenu(!mobileMenu)}
>
  {mobileMenu ? <FaTimes /> : <FaBars />}
</button>
    </> : <>
    <button
    onClick={() => setMobileMenu(!mobileMenu)}
  className="flex items-center gap-2 rounded-full border border-orange-200 dark:border-gray-600 p-2 bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700 transition"
  >
      {mobileMenu ? <FaTimes />: <FaUserCircle className="text-3xl text-orange-500" />   }
  
  </button></>
}
  
</div>
 </div>

      {/* Mobile Menu */}
      {mobileMenu && (
     <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 lg:hidden">
          <div className="flex flex-col gap-4 p-5">
            <Link href="/"
  className="text-gray-700 dark:text-gray-200 hover:text-orange-500" onClick={() => setMobileMenu(false)}>
              Home
            </Link>

            <Link
              href="/all-products"
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500"
              onClick={() => setMobileMenu(false)}
            >
              Products
            </Link>

            <Link
              href="/categories"
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500"
              onClick={() => setMobileMenu(false)}
            >
              Categories
            </Link>

            {isLoggedIn && (
              <Link
                href={`/dashboard/${user.role}`}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500"
                onClick={() => setMobileMenu(false)}
              >
                Dashboard
              </Link>
            )}

            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="rounded-lg border border-orange-500 py-2 text-center text-orange-500"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-lg bg-orange-500 py-2 text-center text-white"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link href="/profile">My Profile</Link>
                <button onClick={async () => {
    await signOut();
    window.location.href = "/";
  }} className="text-left">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}