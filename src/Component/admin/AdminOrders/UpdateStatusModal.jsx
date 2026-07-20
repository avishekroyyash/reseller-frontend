"use client";

import { UpdateOrderStatus } from "@/lib/action/AdminUpDelOrder";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiX, FiSave } from "react-icons/fi";
import { toast } from "react-toastify";

const STATUS_OPTIONS=[
  "pending",
  "accepted",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

export default function UpdateStatusModal({
  isOpen,
  onClose,
  order,
  onSuccess,
}){

  const [status,setStatus]=useState(order?.orderStatus || "");
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setStatus(order?.orderStatus || "");
  },[order]);

  if(!isOpen || !order) return null;

  const handleSubmit=async()=>{

    try{

      setLoading(true);

      const result=await UpdateOrderStatus(order._id,status);

      if(result.modifiedCount>0){

        toast.success("Order status updated.");
        onSuccess?.();
        onClose();

      }else{

        toast.info("No changes were made.");

      }

    }catch(error){

      toast.error("Failed to update order.");

    }finally{

      setLoading(false);

    }

  };

  return(
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-4">

      <motion.div
        initial={{opacity:0,scale:.9,y:20}}
        animate={{opacity:1,scale:1,y:0}}
        transition={{duration:.3}}
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl transition-colors duration-500"
      >

        <div className="flex justify-between items-start border-b dark:border-gray-700 px-4 sm:px-6 py-5">

          <div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Update Order Status
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Change the current order status.
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-white transition"
          >
            <FiX size={22}/>
          </button>

        </div>

        <div className="p-4 sm:p-6 space-y-5">

          <div>

            <label className="block mb-2 font-semibold text-gray-800 dark:text-white">
              Current Status
            </label>

            <div className="bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-700 rounded-lg p-3 text-orange-600 dark:text-orange-300 font-semibold capitalize">
              {order.orderStatus}
            </div>

          </div>

          <div>

            <label className="block mb-2 font-semibold text-gray-800 dark:text-white">
              New Status
            </label>

            <select
              value={status}
              onChange={(e)=>setStatus(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-orange-400"
            >

              {STATUS_OPTIONS.map((item)=>(
                <option key={item} value={item}>
                  {item.charAt(0).toUpperCase()+item.slice(1)}
                </option>
              ))}

            </select>

          </div>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
          >
            <FiSave/>
            {loading?"Updating...":"Update Status"}
          </button>

        </div>

      </motion.div>

    </div>
  );
}