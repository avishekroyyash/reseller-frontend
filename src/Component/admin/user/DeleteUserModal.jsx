"use client";

import { ImCross } from "react-icons/im";
import { TbAlertTriangle } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";


export default function DeleteUserModal({
  isOpen,
  onClose,
  user,
  onDelete,
}) {


  return (
    <AnimatePresence>

      {
        isOpen && user && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          >


            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e)=>e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 border border-orange-200 dark:border-gray-800 shadow-xl transition-colors duration-300"
            >


              {/* Header */}

              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 p-5">


                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Delete User
                </h2>


                <button
                  onClick={onClose}
                  className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
                >
                  <ImCross size={20}/>
                </button>


              </div>



              {/* Body */}

              <div className="p-5 sm:p-6 text-center">


                <motion.div
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900"
                >

                  <TbAlertTriangle
                    size={42}
                    className="text-red-600 dark:text-red-400"
                  />

                </motion.div>



                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Are you sure?
                </h3>



                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  You are about to permanently delete
                </p>



                <p className="mt-2 text-lg font-semibold text-orange-600">
                  {user.name}
                </p>



                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  This action cannot be undone.
                </p>


              </div>




              {/* Footer */}


              <div className="flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-200 dark:border-gray-800 p-5">


                <button
                  onClick={onClose}
                  className="w-full sm:w-auto rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  Cancel
                </button>



                <button
                  onClick={()=>onDelete(user)}
                  className="w-full sm:w-auto rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600 transition"
                >
                  Delete User
                </button>


              </div>


            </motion.div>


          </motion.div>

        )
      }


    </AnimatePresence>
  );
}