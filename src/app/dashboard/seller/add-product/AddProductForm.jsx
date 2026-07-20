"use client";

import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { uploadImage } from "@/lib/uploadImage";
import Image from "next/image";
import { sellerJobPost } from "@/lib/action/SellerJobPost";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function AddProductForm({user}) {
    //console.log(user,'USER')
  const [preview, setPreview] = useState(null);

  // Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Form Submit
  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const form = e.target;
      const formData = new FormData(form);

      const image = formData.get("image");

      // Upload Image
      const imageURL = await uploadImage(image);

      const product = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        condition: formData.get("condition"),
        price: Number(formData.get("price")),
        stock: Number(formData.get("stock")),
        image: imageURL,
        sellerId: user?.id,
        sellerName: user?.name,
        sellerStatus: user?.status,
        sellerEmail: user?.email,
      };

      console.log(product);
      await sellerJobPost(product)
      
      toast.success('Add your product successfully')

      form.reset();
      setPreview(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <form
  onSubmit={handleAddProduct}
  className="space-y-6"
>
  {/* Product Image */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
      Product Image
    </label>

    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-300 dark:border-orange-500 bg-white dark:bg-gray-900 p-8 transition-all duration-300 hover:bg-orange-50 dark:hover:bg-gray-800">

      {preview ? (
        <motion.div
          initial={{ scale: .9 }}
          animate={{ scale: 1 }}
        >
          <Image
            src={preview}
            alt="Preview"
            width={180}
            height={180}
            className="h-44 w-44 rounded-xl object-cover shadow-lg"
          />
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="flex flex-col items-center"
        >
          <FaCloudUploadAlt className="mb-3 text-5xl text-orange-500" />

          <p className="font-medium text-gray-600 dark:text-gray-300">
            Click to upload product image
          </p>

          <span className="mt-2 text-sm text-gray-400 dark:text-gray-500">
            JPG, PNG or WEBP
          </span>
        </motion.div>
      )}

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        required
      />
    </label>
  </motion.div>

  {/* Product Title */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: .1 }}
  >
    <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
      Product Title
    </label>

    <input
      type="text"
      name="title"
      required
      placeholder="Enter product title"
      className="w-full rounded-xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-800 dark:text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition"
    />
  </motion.div>

  {/* Description */}

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: .15 }}
  >
    <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
      Description
    </label>

    <textarea
      rows={5}
      name="description"
      required
      placeholder="Write product description..."
      className="w-full resize-none rounded-xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-800 dark:text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition"
    />
  </motion.div>

  {/* Category & Condition */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: .2 }}
    className="grid gap-5 md:grid-cols-2"
  >
    <div>
      <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
        Category
      </label>

      <select
        name="category"
        required
        className="w-full rounded-xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-orange-400"
      >
        <option value="">Select Category</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home & Living</option>
        <option>Books</option>
        <option>Sports</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
        Condition
      </label>

      <select
        name="condition"
        required
        className="w-full rounded-xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-orange-400"
      >
        <option value="">Select Condition</option>
        <option>Used</option>
        <option>Like New</option>
        <option>Refurbished</option>
      </select>
    </div>
  </motion.div>

  {/* Price & Stock */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: .3 }}
    className="grid gap-5 md:grid-cols-2"
  >
    <div>
      <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
        Price ($)
      </label>

      <input
        type="number"
        name="price"
        required
        min="0"
        step="0.01"
        placeholder="0.00"
        className="w-full rounded-xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-800 dark:text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <div>
      <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
        Stock Quantity
      </label>

      <input
        type="number"
        name="stock"
        required
        min="0"
        placeholder="0"
        className="w-full rounded-xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-800 dark:text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  </motion.div>

  {/* Buttons */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: .4 }}
    className="flex flex-col gap-4 pt-2 sm:flex-row"
  >
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: .97 }}
      type="reset"
      onClick={() => setPreview(null)}
      className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-3 font-semibold text-gray-700 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-gray-800 sm:w-auto"
    >
      Cancel
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: .97 }}
      type="submit"
      className="w-full rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600 sm:w-auto"
    >
      Add Product
    </motion.button>
  </motion.div>
</form>
  );
}