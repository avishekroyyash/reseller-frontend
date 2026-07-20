"use client";

import { useState } from "react";
import Link from "next/link";
import regimg from '../../../../public/Image/register-page-img.webp'
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaImage,
} from "react-icons/fa";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const form = e.target;

    const user = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      photo: form.photo.value,
      phone: form.phone.value,
      location: form.location.value,
      role: form.role.value,
      status: "active",
    };

    console.log(user);
    const { data, error } = await authClient.signUp.email({
    name: user.name, // required
    email: user.email, // required
    password: user.password, // required
    image: user.photo,
    role: user.role,
    status: user.status,
    callbackURL: "/",
});
// console.log(data,'DATA');
// console.log(error,'ERROR');
if(!error){
  toast.success('You Created Account Successfully')
  router.push('/')
  router.refresh()
}
else{
  toast.error(error.message)
}
  };
 // Google login 
 const handleGoogleLogin = async () => {
  const data = await  authClient.signIn.social({
    provider: "google",
  });
}; 

  return (
  <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-500 flex items-center justify-center p-4 md:p-6 lg:p-8">
    <div className="w-full max-w-7xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl transition-colors duration-500 overflow-hidden lg:grid lg:grid-cols-2">

      {/* ================= Left Side ================= */}
      <div className="hidden lg:block relative">
        <Image  className="h-full w-full object-cover"
        src={regimg} alt="image" height={500} width={1200}>

        </Image>
        {/* <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200"
          alt="Register"
          className="h-full w-full object-cover"
        /> */}

        <div className="absolute inset-0 bg-black/55 flex flex-col justify-center px-12 text-white">
          <h1 className="text-6xl font-bold leading-tight">
            Welcome <br />
            <p className="text-orange-200">to Our Platform</p>
          </h1>

         <p className="mt-6 text-lg text-gray-200 leading-8">
  Discover quality products from trusted sellers, explore exclusive deals,
  and enjoy a seamless shopping experience—all in one marketplace.
</p>

         <div className="mt-10 grid grid-cols-3 gap-8">
  <div>
    <h2 className="text-3xl font-bold">50K+</h2>
    <p className="text-gray-300">Satisfied Customers</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold">15K+</h2>
    <p className="text-gray-300">Products Available</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold">2K+</h2>
    <p className="text-gray-300">Verified Sellers</p>
  </div>
</div>

        </div>
      </div>

      {/* ================= Right Side ================= */}
      <div className="flex items-center justify-center p-5 sm:p-8 lg:p-12">
        <div className="w-full max-w-xl">

          {/* Your Header */}
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Join our platform today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-2">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium">
              Name
            </label>

            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full rounded-xl border border-gray-300 py-3 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium">
              Email
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

              <input
                type="email"
                name="email"
                required
                placeholder="abc@gmail.com"
                className="w-full rounded-xl border border-gray-300 py-3 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                minLength={8}
                placeholder="Password"
                className="w-full rounded-xl border border-gray-300 py-3 sm:py-3.5 px-4 pr-12 text-sm sm:text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium">
              Photo URL
            </label>

            <div className="relative">
              <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

              <input
                type="url"
                name="photo"
                placeholder="https://image.jpg"
                className="w-full rounded-xl border border-gray-300 py-3 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium">
              Phone
            </label>

            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

              <input
                type="tel"
                name="phone"
                required
                placeholder="+8801XXXXXXXXX"
                className="w-full rounded-xl border border-gray-300 py-3 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium">
              Location
            </label>

            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

              <input
                type="text"
                name="location"
                required
                placeholder="Sylhet"
                className="w-full rounded-xl border border-gray-300 py-3 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium">
              Role
            </label>

            <select
              name="role"
              defaultValue="buyer"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 sm:py-3.5 text-sm sm:text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
            > 
              <option value="buyer">Buyer</option>
               <option value="seller">Seller</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 sm:py-3.5 text-md sm:text-md font-semibold text-white transition duration-300 hover:bg-orange-600 active:scale-[0.98]"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-xs sm:text-sm text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Google */}
          <button
          onClick={handleGoogleLogin}
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 sm:py-3.5 text-md sm:text-md transition duration-300 dark:hover:bg-orange-400 hover:bg-orange-50"
          >
            <FaGoogle className="text-lg text-red-500" />
            Continue with Google
          </button>
 </form>
          {/* Login */}
          <p className="text-center text-sm sm:text-base text-gray-600">
            Already have an account?
            <Link
              href="/login"
              className="ml-2 font-semibold text-orange-500 hover:underline"
            >
              Login
            </Link>
          </p>
       
      </div>
    </div>
      </div>
  </div>
  );
}