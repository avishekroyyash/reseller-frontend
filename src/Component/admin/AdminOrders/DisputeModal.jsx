"use client";

import { ResolveDispute } from "@/lib/action/AdminUpDelOrder";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiSave, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

export default function DisputeModal({
  isOpen,
  order,
  onClose,
  onSuccess,
}) {

  const [adminNote,setAdminNote]=useState("");
  const [resolved,setResolved]=useState(false);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{

    if(order?.dispute){

      setAdminNote(order.dispute.adminNote || "");
      setResolved(order.dispute.resolved || false);

    }else{

      setAdminNote("");
      setResolved(false);

    }

  },[order]);


  if(!isOpen || !order) return null;


  const handleSubmit=async()=>{

    setLoading(true);

    try{

      const result=await ResolveDispute(
        order._id,
        adminNote,
        resolved
      );


      if(result.modifiedCount>0){

        toast.success("Dispute updated successfully.");

        onSuccess?.();

        onClose();

      }else{

        toast.info("No changes detected.");

      }


    }catch(error){

      toast.error("Failed to update dispute.");

    }finally{

      setLoading(false);

    }

  };


  return(

    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-3 sm:p-4">


      <motion.div

        initial={{opacity:0,scale:.9,y:20}}

        animate={{opacity:1,scale:1,y:0}}

        transition={{duration:.3}}

        className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl transition-colors duration-500"

      >


        {/* Header */}


        <div className="flex justify-between items-center border-b dark:border-gray-700 p-4 sm:p-6">


          <div className="flex items-center gap-3">


            <FiAlertTriangle
              className="text-orange-500"
              size={24}
            />


            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">

              Resolve Dispute

            </h2>


          </div>



          <button

            onClick={onClose}

            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-white"

          >

            <FiX size={24}/>

          </button>


        </div>






        {/* Body */}


        <div className="p-4 sm:p-6 space-y-5">



          <div>


            <label className="font-semibold block mb-2 text-gray-800 dark:text-white">

              Buyer Reason

            </label>



            <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg p-4">

              {order.dispute?.reason || "No dispute reason provided."}

            </div>


          </div>






          <div>


            <label className="font-semibold block mb-2 text-gray-800 dark:text-white">

              Admin Note

            </label>



            <textarea

              rows={5}

              value={adminNote}

              onChange={(e)=>setAdminNote(e.target.value)}

              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"

              placeholder="Write your decision..."

            />


          </div>






          <label className="flex items-center gap-3 text-gray-800 dark:text-white cursor-pointer">

            <input

              type="checkbox"

              checked={resolved}

              onChange={(e)=>setResolved(e.target.checked)}

              className="w-4 h-4 accent-orange-500"

            />

            Mark as Resolved

          </label>






          <button

            onClick={handleSubmit}

            disabled={loading}

            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"

          >

            <FiSave/>

            {loading?"Saving...":"Save Changes"}

          </button>



        </div>


      </motion.div>


    </div>

  );

}