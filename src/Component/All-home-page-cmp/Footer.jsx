"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaStore,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-500 dark:bg-gray-950 text-white transition-colors duration-300">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}
          <div className="lg:col-span-2">

            <Link
              href="/"
              className="flex items-center gap-3 text-3xl font-bold"
            >
              <FaStore />
              ReBazaar
            </Link>

            <p className="mt-5 text-orange-100 dark:text-gray-300 leading-8">
              ReBazaar is your trusted reseller marketplace where buyers
              discover quality products from verified sellers at affordable
              prices with secure shopping and fast delivery.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-orange-500 dark:text-orange-400 transition hover:bg-orange-100 dark:hover:bg-gray-700"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-orange-500 dark:text-orange-400 transition hover:bg-orange-100 dark:hover:bg-gray-700"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-orange-500 dark:text-orange-400 transition hover:bg-orange-100 dark:hover:bg-gray-700"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-orange-500 dark:text-orange-400 transition hover:bg-orange-100 dark:hover:bg-gray-700"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="mb-5 text-xl font-semibold">
              Quick Links
            </h2>

            <ul className="space-y-3 text-orange-100 dark:text-gray-300">

              <li>
                <Link href="/" className="hover:text-white dark:hover:text-orange-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/all-products" className="hover:text-white dark:hover:text-orange-400 transition">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/categories" className="hover:text-white dark:hover:text-orange-400 transition">
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-white dark:hover:text-orange-400 transition">
                  Dashboard
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h2 className="mb-5 text-xl font-semibold">
              Categories
            </h2>

            <ul className="space-y-3 text-orange-100 dark:text-gray-300">

              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Living</li>
              <li>Accessories</li>
              <li>Sports</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h2 className="mb-5 text-xl font-semibold">
              Contact
            </h2>

            <div className="space-y-4 text-orange-100 dark:text-gray-300">

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+880 1700-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>support@rebazaar.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>Sylhet, Bangladesh</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Newsletter */}
      <div className="border-y border-orange-400 dark:border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>

            <h2 className="text-2xl font-bold">
              Subscribe to our Newsletter
            </h2>

            <p className="mt-2 text-orange-100 dark:text-gray-300">
              Get exclusive offers, discounts, and the latest product updates.
            </p>

          </div>

          <form className="flex w-full max-w-lg overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none"
            />

            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-800 px-6 text-white transition"
            >
              <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>

      {/* Bottom */}
      <div className="bg-orange-600 dark:bg-black transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-orange-100 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} ReBazaar. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-orange-100 dark:text-gray-400">

            <Link
              href="/privacy"
              className="hover:text-white dark:hover:text-orange-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white dark:hover:text-orange-400 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/faq"
              className="hover:text-white dark:hover:text-orange-400 transition"
            >
              FAQ
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}