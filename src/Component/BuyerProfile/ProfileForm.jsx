"use client";

import { BuyerProfileUpdate } from "@/lib/action/BuyerProfileEdit";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProfileForm({ user }) {
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = user.id
    // console.log(id,'USER-ID');
    const updatedUser = {
      name,
      image,
    };

    console.log(updatedUser);
    const data = BuyerProfileUpdate(id,updatedUser)
    toast.success('Your Profile Edit Successfully')
    // await fetch(`/users/${user._id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updatedUser),
    // });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-orange-600 mb-8">
        Personal Information
      </h2>

      <div className="space-y-6">

        <div>
          <label className="block font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Profile Image URL
          </label>

          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Email Address
          </label>

          <input
            value={user.email}
            disabled
            className="w-full border rounded-xl p-3 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Save Changes
        </button>

      </div>
    </form>
  );
}