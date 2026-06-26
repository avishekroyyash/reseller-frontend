"use client";

import { useState } from "react";
import Link from "next/link";
import logimg from '../../../../public/Image/register-page-img.webp'
import {
  FaEnvelope,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaBriefcase,
} from "react-icons/fa";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const user = {
      email: form.email.value,
      password: form.password.value,
    };

    console.log(user);
    alert("Login Successfully!");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden lg:block relative">
          <Image className="w-full h-full object-cover"
           src={logimg} alt="image" width={1200} height={1200}></Image>
      {/* <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
            alt="Login"
            className="w-full h-full object-cover"
          /> */}

          <div className="absolute inset-0 bg-linear-to-br from-orange-900/70 to-orange-300/90 flex flex-col justify-center p-14 text-white">

            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-5xl" />
              <h1 className="text-4xl font-bold">
                ReBazaar
              </h1>
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Welcome
              <br />
              Back!
            </h2>

         <p className="mt-6 text-lg text-orange-100 leading-8">
  Sign in to access exclusive deals, browse thousands of quality
  products, connect with verified sellers, and enjoy a fast, secure,
  and reliable shopping experience.
</p>

<div className="mt-12 flex gap-10">

  <div>
    <h3 className="text-3xl font-bold">
      30K+
    </h3>
    <p className="text-orange-100">
      Orders Delivered
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">
      10K+
    </h3>
    <p className="text-orange-100">
      Products Listed
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">
      1.5K+
    </h3>
    <p className="text-orange-100">
      Trusted Sellers
    </p>
  </div>

</div>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12">

          <div className="w-full max-w-md">

            <div className="text-center mb-8">

              <h1 className="text-3xl font-bold text-orange-500">
                Welcome Back
              </h1>

              <p className="mt-2 text-gray-500">
                Login to your account
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Email */}

              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="abc@gmail.com"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label className="block mb-2 font-medium">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Password"
                    className="w-full rounded-xl border border-gray-300 py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

              </div>

              {/* Forgot Password */}

              <div className="flex justify-end">

                <Link
                  href="/forgot-password"
                  className="text-sm text-orange-500 hover:underline"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Login */}

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold"
              >
                Login
              </button>

              {/* Divider */}

              <div className="flex items-center gap-3">

                <div className="flex-1 h-px bg-gray-300"></div>

                <span className="text-sm text-gray-400">
                  OR
                </span>

                <div className="flex-1 h-px bg-gray-300"></div>

              </div>

              {/* Google */}

              <button
                type="button"
                className="w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-orange-50 transition"
              >
                <FaGoogle className="text-red-500 text-lg" />

                Continue with Google
              </button>

              {/* Register */}

              <p className="text-center text-gray-600">

                Don't have an account?

                <Link
                  href="/register"
                  className="ml-2 text-orange-500 font-semibold hover:underline"
                >
                  Register
                </Link>

              </p>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}