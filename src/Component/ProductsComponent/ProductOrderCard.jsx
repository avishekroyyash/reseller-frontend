"use client";

import { BuyerWishlistPost } from "@/lib/action/BuyerWhislistPost";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaShoppingCart,
  FaBolt,
  FaMinus,
  FaPlus,
  FaTruck,
  FaShieldAlt,
  FaBoxOpen,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function ProductOrderCard({ product }) {
  const [quantity, setQuantity] = useState(1);
 const {data} = useSession()
  const router = useRouter()
 const user= data?.user
//  console.log(user,'USER IN PRODUCT ORDER CARD');
// send stripe product,quantity,buyer 
const handleBuyNow = async () => {

    if (!user) {

        toast.error("Please login first");
        router.push('/login')
        return;
    }

    const res = await fetch("/api/checkout_sessions", {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
          product,
            quantity,
            buyer: {
                userId: user?.id,
              name: user?.name,
                email: user?.email,
            },

        }),

    });

    const data = await res.json();
    //  console.log(data,'HANDLE BUY NOW 01');
    window.location.href = data.url;
};
const handlewishlist = async () => {
    if (!user) {
        toast.error("Please login first");
        router.push('/login')
        return;
    }
    const data = {
    ...product,
    productId:product._id,
    userId:user?.id,
    userName:user?.name
  }
  // console.log(data,'DATA OF WISHLIST');
await BuyerWishlistPost(data)
toast.success('Your Product added into the Wishlist')
}
  const increase = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const total = product.price * quantity;

  return (
    <div className="sticky top-24">
     <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-xl"
  >

        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold dark:text-white text-gray-800">
          Order Summary
        </h2>

        {/* Price */}
        <div className="flex items-center justify-between border-b pb-5">
          <span className="text-gray-500 dark:text-gray-400">
            Price
          </span>

          <span className="text-3xl font-bold text-orange-500">
            ${product.price}
          </span>
        </div>

        {/* Quantity */}
        <div className="mt-6">
          <p className="mb-3 font-semibold text-gray-700 dark:text-gray-200">
            Quantity
          </p>

          <div className="flex items-center justify-between rounded-xl border p-3">

           <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={decrease}
  className="rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white p-3 transition hover:bg-orange-500 hover:text-white"
>
  <FaMinus />
</motion.button>

            <span className="text-xl font-bold">
              {quantity}
            </span>

           <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={increase}
  className="rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white p-3 transition hover:bg-orange-500 hover:text-white"
>
  <FaPlus />
</motion.button>

          </div>
        </div>

        {/* Total */}
        <div className="mt-6 flex items-center justify-between border-b pb-5">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Total
          </span>

          <span className="text-2xl font-bold text-orange-500">
            ${total}
          </span>
        </div>

        {/* Stock */}
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4">
          <FaBoxOpen className="text-green-600 text-xl" />

          <div>
            <p className="font-semibold text-green-700">
              In Stock
            </p>

            <p className="text-sm text-green-600">
              {product.stock} item(s) available
            </p>
          </div>
        </div>

        {/* Delivery */}
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-orange-50 dark:bg-orange-900/20 p-4">
          <FaTruck className="text-orange-500 text-xl" />

          <div>
            <p className="font-semibold dark:text-white text-gray-800">
              Fast Delivery
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Estimated delivery in 2-5 days
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 p-4">
          <FaShieldAlt className="text-blue-500 text-xl" />

          <div>
            <p className="font-semibold text-gray-800">
              Secure Payment
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              100% protected checkout
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-4">
         
        
      <section>
        <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.96 }}onClick={handleBuyNow} className="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 dark:bg-orange-900/20 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600">
           <FaBolt />
            Buy Now
        </motion.button>
      </section>
   
      <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.96 }}onClick={handlewishlist} className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-orange-500 py-4 text-lg font-semibold text-orange-500 dark:bg-orange-900/20 transition hover:bg-orange-500 hover:text-white">
            <FaShoppingCart />
            Add to Wishlist
          </motion.button>

        </div>

        {/* Extra Information */}
        <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-5">

          <h3 className="mb-4 font-semibold text-gray-800">
            Why Shop With Us?
          </h3>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li>✔ Secure payment</li>
            <li>✔ Fast nationwide delivery</li>
            <li>✔ Easy order tracking</li>
            <li>✔ Trusted reseller marketplace</li>
            <li>✔ Customer support available</li>
          </ul>

        </div>

      </motion.div>
    </div>
  );
}