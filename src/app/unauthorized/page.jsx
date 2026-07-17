"use client";

import Link from "next/link";
import { FiLock, FiArrowLeft, FiHome } from "react-icons/fi";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6">
      <section className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
          {/* Top Bar */}
          <div className="h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400"></div>

          <div className="p-10 md:p-14 text-center">
            {/* Icon */}
            <div className="mx-auto w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center shadow-lg">
              <FiLock className="text-6xl text-orange-500" />
            </div>

            {/* Error Code */}
            <h1 className="mt-8 text-7xl md:text-8xl font-extrabold text-orange-500">
              401
            </h1>

            {/* Title */}
            <h2 className="mt-4 text-3xl font-bold text-gray-800">
              Unauthorized Access
            </h2>

            {/* Description */}
            <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
              Sorry, you don't have permission to access this page.
              Please sign in with the appropriate account or return to the
              homepage.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FiHome className="text-lg" />
                Go Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold transition-all duration-300"
              >
                <FiArrowLeft className="text-lg" />
                Go Back
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-10 bg-orange-50 border border-orange-100 rounded-2xl p-5">
              <p className="text-gray-700">
                <span className="font-semibold text-orange-600">
                  Why am I seeing this?
                </span>
              </p>

              <p className="text-gray-600 mt-2 text-sm leading-7">
                You may not be logged in, your session may have expired,
                or your account doesn't have permission to access this
                resource.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Marketplace. All rights reserved.
        </div>
      </section>
    </main>
  );
}