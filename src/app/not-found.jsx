"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaHome,
  FaShoppingBag,
} from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-orange-300 opacity-20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-orange-500 opacity-20 blur-3xl"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden items-center justify-center bg-linear-to-br from-orange-500 via-orange-600 to-orange-700 p-12 lg:flex">

          <div className="text-center text-white">

            <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <FaShoppingBag className="text-5xl" />
            </div>

            <h1 className="text-[140px] font-black leading-none">
              404
            </h1>

            <p className="mt-6 text-xl leading-8 text-orange-100">
              Looks like this page has gone shopping and
              hasn't returned yet.
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 sm:p-12">

          <div className="max-w-md text-center">

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Oops! Page Not Found
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              We couldn't find
              <br />
              the page you're looking for.
            </h2>

            <p className="mt-6 leading-8 text-gray-500">
              The page may have been moved, deleted,
              or the URL might be incorrect.
              Let's get you back to shopping.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                <FaHome />
                Back Home
              </Link>

              <button
                onClick={() => router.back()}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-200 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                <FaArrowLeft />
                Go Back
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}