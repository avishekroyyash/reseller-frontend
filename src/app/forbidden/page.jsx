"use client";

import Link from "next/link";
import { FiShield, FiHome, FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

export default function ForbiddenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl">
          {/* Top Gradient */}
          <div className="h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400" />

          <div className="p-8 md:p-14 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-orange-100 shadow-lg">
              <FiShield className="text-6xl text-orange-500" />
            </div>

            {/* Error Code */}
            <h1 className="mt-8 text-7xl md:text-8xl font-extrabold text-orange-500">
              403
            </h1>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-bold text-gray-800">
              Access Forbidden
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              You are signed in, but you don't have permission to view this
              page or perform this action. Please contact an administrator if
              you believe this is a mistake.
            </p>

            {/* Warning Card */}
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <div className="flex items-start gap-3">
                <FiAlertTriangle className="mt-1 text-2xl text-orange-500" />

                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">
                    Permission Required
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Your current account role doesn't have access to this
                    resource. If you need access, please request the appropriate
                    permissions from your administrator.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600 hover:shadow-xl"
              >
                <FiHome />
                Go Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-50"
              >
                <FiArrowLeft />
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Marketplace. All rights reserved.
        </div>
      </section>
    </main>
  );
}