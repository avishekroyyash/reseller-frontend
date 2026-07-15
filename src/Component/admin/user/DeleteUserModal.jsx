"use client";

import { ImCross } from "react-icons/im";
import { TbAlertTriangle } from "react-icons/tb";



export default function DeleteUserModal({
  isOpen,
  onClose,
  user,
  onDelete,
}) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-xl font-bold text-gray-800">
            Delete User
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            <ImCross size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 text-center">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

            <TbAlertTriangle
              size={42}
              className="text-red-600"
            />

          </div>

          <h3 className="text-xl font-semibold text-gray-800">
            Are you sure?
          </h3>

          <p className="mt-3 text-gray-500">
            You are about to permanently delete
          </p>

          <p className="mt-2 text-lg font-semibold text-orange-600">
            {user.name}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            This action cannot be undone.
          </p>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t p-5">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={() => onDelete(user)}
            className="rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600"
          >
            Delete User
          </button>

        </div>

      </div>

    </div>
  );
}