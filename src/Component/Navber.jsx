"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaStore,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";

export default function Navber() {
  // take user 
  const {data} = useSession();
  const user = data?.user
  //console.log(user)

const isLoggedIn = user;  
 {isLoggedIn ? true : false }

  

  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
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
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link
            href="/all-products"
            className="hover:text-orange-500 transition"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="hover:text-orange-500 transition"
          >
            Categories
          </Link>

          {isLoggedIn && (
            <Link
              href={`/dashboard/${user?.role}`}
              className="hover:text-orange-500 transition"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
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
                className="flex items-center gap-2 rounded-full border px-3 py-2 hover:border-orange-500"
              >
                  <h1>Hi,{user?.name}</h1>
                  {/* {user?.image ? <Image src={user?.image} alt={user?.name[0]} width={20} height={20}></Image> :   <FaUserCircle className="text-2xl text-orange-500" />  } */}
                   <FaUserCircle className="text-2xl text-orange-500" /> 
              
                <FaChevronDown className="text-sm" />
               
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-3 w-52 rounded-xl border bg-white shadow-lg">
                  <Link
                    href={`/dashboard/${user.role}/profile`}
                    className="block px-5 py-3 hover:bg-orange-50"
                  >
                    My Profile
                  </Link>

                  <Link
                    href={`/dashboard/${user.role}`}
                    className="block px-5 py-3 hover:bg-orange-50"
                  >
                    Dashboard
                  </Link>

                  <button onClick={()=>signOut()} className="w-full px-5 py-3 text-left hover:bg-orange-50">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>



        {/* Mobile Button */}



       <div className="relative lg:hidden">
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
    className="flex items-center gap-2 rounded-full border border-orange-200 p-2 hover:bg-orange-50 transition"
  >
      {mobileMenu ? <FaTimes />: <FaUserCircle className="text-3xl text-orange-500" />   }
  
  </button></>
}
      

  

  
</div>





      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col gap-4 p-5">
            <Link href="/" onClick={() => setMobileMenu(false)}>
              Home
            </Link>

            <Link
              href="/all-products"
              onClick={() => setMobileMenu(false)}
            >
              Products
            </Link>

            <Link
              href="/categories"
              onClick={() => setMobileMenu(false)}
            >
              Categories
            </Link>

            {isLoggedIn && (
              <Link
                href={`/dashboard/${user.role}`}
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
                <button onClick={()=>signOut()} className="text-left">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}