"use client";

import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

export default function UpdateUserModal({
  isOpen,
  onClose,
  user,
  onSave,
}) {

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    status: "",
  });


  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        role: user.role || "",
        status: user.status || "",
      });
    }
  }, [user]);


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...user,
      ...formData,
    });
  };


  return (
    <AnimatePresence>

      {
        isOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          >


            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-orange-200 dark:border-gray-800 transition-colors duration-300"
            >


              {/* Header */}

              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-5 sm:px-6 py-4">

                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Update User
                </h2>


                <button
                  onClick={onClose}
                  className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
                >
                  <ImCross size={20}/>
                </button>

              </div>



              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-6 space-y-5"
              >


                {/* Name */}

                <div>

                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>


                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-11 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 outline-none focus:border-orange-500 transition"
                    required
                  />

                </div>



                {/* Role */}

                <div>

                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Role
                  </label>


                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full h-11 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 outline-none focus:border-orange-500 transition"
                  >

                    <option value="buyer">
                      Buyer
                    </option>

                    <option value="seller">
                      Seller
                    </option>

                    <option value="admin">
                      Admin
                    </option>

                  </select>

                </div>




                {/* Status */}

                <div>

                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Status
                  </label>


                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full h-11 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 outline-none focus:border-orange-500 transition"
                  >

                    <option value="active">
                      Active
                    </option>

                    <option value="blocked">
                      Blocked
                    </option>

                  </select>

                </div>




                {/* Footer */}

                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">


                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    Cancel
                  </button>



                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
                  >
                    Save Changes
                  </button>


                </div>


              </form>


            </motion.div>


          </motion.div>

        )
      }


    </AnimatePresence>
  );
}