"use client";

import { BuyerWishlistPost } from "@/lib/action/BuyerWhislistPost";
import { BuyerWishlistDel } from "@/lib/action/BuyerWishlistDel";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaHeart,
  FaBoxes,
  FaTag,
  FaArrowRight,
  FaUserCircle,
  FaRegClock,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const router = useRouter()
  const [isWishlist, setIsWishlist] = useState(true);
  const {data} = useSession();
  const user = data?.user
  //console.log(data.user,'USER');

const handleWishlist = async () => {
 
   const previous = isWishlist;

  setIsWishlist(!previous);
   
    if (!user) {
  
          toast.error("Please login first");
          router.push('/login')
          return;
      }
  //console.log('BUTTON CLICKED');

  // console.log(previous,'ISWHISLIST');
  const data = {
    ...product,
    productId:product._id,
    userId:user?.id,
    userName:user?.name
  }
  // console.log(data,'DATA');
 if(previous){
  const post = await BuyerWishlistPost(data)
  toast.success('Successfully Added To WishList')
  // console.log(post,'this is data which i sent to backend')
 }
 else{
  const del = await BuyerWishlistDel(data.productId)
  toast.warn('Remove to Wishlist')
  // console.log(del,'this is delete from server');
 }
  
};
  return (
   <motion.div
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
  }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:border-orange-300 hover:shadow-2xl"
>

      {/* ================= IMAGE ================= */}

    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-800 dark:via-gray-900 dark:to-black">

        {/* Wishlist */}
       <motion.button
  whileHover={{
    scale: 1.2,
    rotate: 15,
  }}
  whileTap={{
    scale: 0.9,
  }}
  onClick={handleWishlist}
  className={`absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
    !isWishlist
      ? "bg-orange-500 text-white"
      : "bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-orange-500 hover:text-white"
  }`}
>
  <FaHeart />
</motion.button>

        {/* Category */}
        <span className="absolute left-3 top-3 z-20 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow">
          {product.category}
        </span>

        {/* Image */}

       <motion.div
  whileHover={{
    scale: 1.08,
    rotate: 2,
  }}
  transition={{
    duration: 0.4,
  }}
  className="flex h-full items-center justify-center p-6"
>

          <Image
            src={product.image}
            alt={product.title}
            width={280}
            height={280}
            className="max-h-full rounded-2xl w-auto object-contain transition duration-500 group-hover:scale-110"
          />

        </motion.div>

        {/* Stock */}

        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 dark:bg-gray-800/90 px-3 py-1 text-xs font-semibold text-orange-600 backdrop-blur">
          {product.stock} In Stock
        </span>
       
      </div>

      {/* ================= BODY ================= */}

      <div className="flex flex-1 flex-col p-5">

       <motion.h2
  whileHover={{
    x: 5,
  }} className="line-clamp-1 text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition">
          {product.title}
        </motion.h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          {product.description}
        </p>

        {/* Seller */}

        <div className="mt-4 flex items-center justify-between text-sm">

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaUserCircle className="text-orange-500" />
            <span>{product.sellerName}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
            <FaRegClock size={12} />
            <span>New</span>
          </div>

        </div>

        {/* Condition */}

        <div className="mt-4 flex items-center justify-between">

          <span className="rounded-full borderborder-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 px-3 py-1 text-xs font-semibold ">
            {product.condition}
          </span>

          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-300">

            <FaBoxes className="text-orange-500" />

            <span>{product.stock} Left</span>

          </div>

        </div>

        <div className="my-5 border-t border-gray-100 dark:border-gray-700"></div>

        {/* Footer */}

        <div className="mt-auto flex items-center justify-between">

          <div>

            <p className="text-xs text-gray-400 dark:text-gray-500">
              Price
            </p>

          <motion.div
  whileHover={{
    scale: 1.05,
  }}
  className="mt-1 flex items-center gap-2"
>

              <FaTag className="text-orange-500" />

              <span className="text-3xl font-bold text-orange-500">
                ${product.price}
              </span>

            </motion.div>

          </div>
        <motion.div
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
>
          <Link
            href={`/all-products/${product._id}`}
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-orange-700"
          >
            Details
            <FaArrowRight size={12} />
          </Link>
</motion.div>
        </div>
        

      </div>

    </motion.div>
  );
}