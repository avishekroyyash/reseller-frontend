"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckCircle, FiEye, FiTrash2, FiXCircle } from "react-icons/fi";


export default function ProductTable({
  products,
  loading,
  onApprove,
  onReject,
  onDelete,
  onView,
}) {


  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300";

      case "rejected":
        return "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300";

      default:
        return "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300";
    }
  };


  return (
    <>

      {/* Desktop Table */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block overflow-x-auto bg-white dark:bg-gray-900 rounded-2xl shadow border border-orange-200 dark:border-gray-700 transition-colors duration-500"
      >

        <table className="w-full">

          <thead className="bg-orange-100 dark:bg-gray-800 text-gray-800 dark:text-white">

            <tr>

              {[
                "Image",
                "Product",
                "Seller",
                "Category",
                "Price",
                "Stock",
                "Status",
                "Actions",
              ].map((item)=>(

                <th
                  key={item}
                  className="px-5 py-4 text-left"
                >
                  {item}
                </th>

              ))}

            </tr>

          </thead>


          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={8}
                  className="py-10 text-center text-gray-500 dark:text-gray-400"
                >
                  Loading products...
                </td>

              </tr>


            ) : products.length===0 ? (

              <tr>

                <td
                  colSpan={8}
                  className="py-10 text-center text-gray-500 dark:text-gray-400"
                >
                  No products found.
                </td>

              </tr>


            ) : (

              products.map((product,index)=>(

                <motion.tr
                  key={product._id}
                  initial={{opacity:0,y:10}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:index*0.05}}
                  className="border-t dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-800 transition"
                >


                  <td className="px-5 py-4">

                    <Image
                      src={product.image}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-lg object-cover border dark:border-gray-700"
                    />

                  </td>


                  <td className="px-5 py-4 font-semibold text-gray-800 dark:text-white">
                    {product.title}
                  </td>


                  <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                    {product.sellerName}
                  </td>


                  <td className="px-5 py-4 text-center text-gray-700 dark:text-gray-300">
                    {product.category}
                  </td>


                  <td className="px-5 py-4 text-center text-gray-700 dark:text-gray-300">
                    ${product.price}
                  </td>


                  <td className="px-5 py-4 text-center text-gray-700 dark:text-gray-300">
                    {product.stock}
                  </td>


                  <td className="px-5 py-4 text-center">

                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadge(product.status)}`}>

                      {product.status || "pending"}

                    </span>

                  </td>



                  <td className="px-5 py-4">

                    <div className="flex justify-center gap-2">


                      <button
                        onClick={()=>onApprove(product)}
                        disabled={product.status==="approved"}
                        className={`p-2 rounded text-white ${
                          product.status==="approved"
                          ?"bg-gray-400 cursor-not-allowed"
                          :"bg-green-500 hover:bg-green-600"
                        }`}
                      >
                        <FiCheckCircle/>
                      </button>


                      <button
                        onClick={()=>onReject(product)}
                        disabled={product.status==="rejected"}
                        className={`p-2 rounded text-white ${
                          product.status==="rejected"
                          ?"bg-gray-400 cursor-not-allowed"
                          :"bg-yellow-500 hover:bg-yellow-600"
                        }`}
                      >
                        <FiXCircle/>
                      </button>


                      <button
                        onClick={()=>onDelete(product)}
                        className="p-2 rounded bg-red-500 hover:bg-red-600 text-white"
                      >
                        <FiTrash2/>
                      </button>


                    </div>

                  </td>


                </motion.tr>

              ))

            )}

          </tbody>


        </table>


      </motion.div>





      {/* Mobile Card */}


      <div className="grid lg:hidden gap-4">


        {products.map((product,index)=>(


          <motion.div
            key={product._id}
            initial={{opacity:0,scale:.95}}
            animate={{opacity:1,scale:1}}
            transition={{delay:index*0.05}}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-orange-200 dark:border-gray-700 p-4 transition"
          >


            <div className="flex gap-4">


              <Image
                src={product.image}
                alt={product.title}
                width={96}
                height={96}
                className="w-24 h-24 rounded-lg object-cover border dark:border-gray-700"
              />


              <div className="flex-1">


                <h2 className="font-bold text-lg text-gray-800 dark:text-white">
                  {product.title}
                </h2>


                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {product.sellerName}
                </p>


                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Category: {product.category}
                </p>


                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Stock: {product.stock}
                </p>


                <p className="text-orange-600 dark:text-orange-400 font-bold mt-2">
                  ${product.price}
                </p>


                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadge(product.status)}`}>

                  {product.status || "pending"}

                </span>


              </div>


            </div>




            <div className="grid grid-cols-4 gap-2 mt-5">


              <button
                onClick={()=>onView?.(product)}
                className="bg-blue-500 hover:bg-blue-600 py-2 rounded text-white flex justify-center"
              >
                <FiEye/>
              </button>


              <button
                onClick={()=>onApprove(product)}
                disabled={product.status==="approved"}
                className={`py-2 rounded text-white flex justify-center ${
                  product.status==="approved"
                  ?"bg-gray-400"
                  :"bg-green-500 hover:bg-green-600"
                }`}
              >
                <FiCheckCircle/>
              </button>


              <button
                onClick={()=>onReject(product)}
                disabled={product.status==="rejected"}
                className={`py-2 rounded text-white flex justify-center ${
                  product.status==="rejected"
                  ?"bg-gray-400"
                  :"bg-yellow-500 hover:bg-yellow-600"
                }`}
              >
                <FiXCircle/>
              </button>


              <button
                onClick={()=>onDelete(product)}
                className="bg-red-500 hover:bg-red-600 py-2 rounded text-white flex justify-center"
              >
                <FiTrash2/>
              </button>


            </div>


          </motion.div>


        ))}


      </div>


    </>
  );
}