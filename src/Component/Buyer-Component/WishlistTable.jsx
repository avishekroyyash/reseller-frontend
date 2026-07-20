"use client";

import { BuyerWishlistDel } from "@/lib/action/BuyerWishlistDel";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaTrash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function WishlistTable({ products }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const del = await BuyerWishlistDel(id);

    if (del?.deletedCount > 0 || del?.success) {
      toast.success("Wishlist item deleted successfully");
      router.refresh();
    } else {
      toast.error("Delete failed");
    }
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        dark:border-gray-700

        bg-white
        dark:bg-gray-900

        shadow-lg

        transition-colors
        duration-300
      "
    >
      {/* Desktop Table */}

      <div className="hidden lg:block overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-orange-500 text-white">

            <tr>

              <th className="px-6 py-4 text-left">
                Image
              </th>

              <th className="px-6 py-4 text-left">
                Product
              </th>

              <th className="px-6 py-4 text-left">
                Price
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {products?.map((product, index) => (

              <motion.tr
                key={product._id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  border-b
                  border-gray-200
                  dark:border-gray-700

                  hover:bg-orange-50
                  dark:hover:bg-gray-800

                  transition
                "
              >
                <td className="px-6 py-4">

                  <Image
                    src={product.image}
                    alt={product.title}
                    width={70}
                    height={70}
                    className="rounded-xl object-cover"
                  />

                </td>

                <td className="px-6 py-4 font-semibold text-gray-700 dark:text-white">
                  {product.title}
                </td>

                <td className="px-6 py-4 font-bold text-orange-500">
                  ৳{product.price}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href="/all-products"
                      className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition"
                    >
                      <FaPlus />
                    </Link>

                    <Link
                      href={`/all-products/${product._id}`}
                      className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
                    >
                      <FaEye />
                    </Link>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="grid gap-5 p-5 lg:hidden">

        {products?.map((product, index) => (

          <motion.div
            key={product._id}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              rounded-2xl

              border
              border-gray-200
              dark:border-gray-700

              bg-white
              dark:bg-gray-800

              p-4

              shadow-md
            "
          >

            <div className="flex gap-4">

              <Image
                src={product.image}
                alt={product.title}
                width={90}
                height={90}
                className="rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                  {product.title}
                </h3>

                <p className="mt-2 text-xl font-bold text-orange-500">
                  ৳{product.price}
                </p>

              </div>

            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">

              <Link
                href="/all-products"
                className="flex items-center justify-center gap-2 rounded-lg bg-green-500 py-3 text-white hover:bg-green-600 transition"
              >
                <FaPlus />
              </Link>

              <Link
                href={`/all-products/${product._id}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 py-3 text-white hover:bg-blue-600 transition"
              >
                <FaEye />
              </Link>

              <button
                onClick={() => handleDelete(product._id)}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-500 py-3 text-white hover:bg-red-600 transition"
              >
                <FaTrash />
              </button>

            </div>

          </motion.div>

        ))}

      </div>

      {products?.length === 0 && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="py-16 text-center"
        >

          <div className="text-6xl">
            ❤️
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-800 dark:text-white">
            Wishlist Empty
          </h2>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            You haven't added any products yet.
          </p>

        </motion.div>

      )}

    </div>
  );
}