"use client";

import { BuyerProfileUpdate } from "@/lib/action/BuyerProfileEdit";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProfileForm({ user }) {
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.image);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const updatedUser = {
        name,
        image,
      };

      const data = await BuyerProfileUpdate(user.id, updatedUser);

      if (data?.modifiedCount > 0 || data?.success) {
        toast.success("Profile updated successfully.");
      } else {
        toast.info("No changes were made.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-orange-100
        dark:border-gray-800
        bg-white
        dark:bg-gray-900
        shadow-lg
        dark:shadow-black/30
        p-5
        sm:p-6
        lg:p-8
        transition-colors
        duration-300
      "
    >
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400">
          Personal Information
        </h2>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Update your profile information below.
        </p>
      </div>

      <div className="space-y-6">
        {/* Name */}

        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              dark:border-gray-700
              bg-white
              dark:bg-gray-800
              px-4
              py-3
              text-gray-900
              dark:text-white
              placeholder:text-gray-400
              outline-none
              transition
              focus:border-orange-500
              focus:ring-2
              focus:ring-orange-400
            "
          />
        </div>

        {/* Image */}

        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Profile Image URL
          </label>

          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/profile.jpg"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              dark:border-gray-700
              bg-white
              dark:bg-gray-800
              px-4
              py-3
              text-gray-900
              dark:text-white
              placeholder:text-gray-400
              outline-none
              transition
              focus:border-orange-500
              focus:ring-2
              focus:ring-orange-400
            "
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>

          <input
            value={user.email}
            disabled
            className="
              w-full
              cursor-not-allowed
              rounded-xl
              border
              border-gray-300
              dark:border-gray-700
              bg-gray-100
              dark:bg-gray-800
              px-4
              py-3
              text-gray-500
              dark:text-gray-400
            "
          />
        </div>

        {/* Role */}

        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Role
          </label>

          <input
            value={user.role}
            disabled
            className="
              w-full
              cursor-not-allowed
              rounded-xl
              border
              border-gray-300
              dark:border-gray-700
              bg-gray-100
              dark:bg-gray-800
              px-4
              py-3
              capitalize
              text-gray-500
              dark:text-gray-400
            "
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-orange-500
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-orange-600
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Saving Changes..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}