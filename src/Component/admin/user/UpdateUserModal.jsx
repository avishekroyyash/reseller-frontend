"use client";

import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";


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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">

          <h2 className="text-xl font-bold text-gray-800">
            Update User
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            <ImCross size={22} />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >

          {/* Name */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg h-11 px-4 focus:border-orange-500 outline-none"
              required
            />

          </div>

          {/* Role */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg h-11 px-4 focus:border-orange-500 outline-none"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>

          </div>

          {/* Status */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg h-11 px-4 focus:border-orange-500 outline-none"
            >
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
            </select>

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}