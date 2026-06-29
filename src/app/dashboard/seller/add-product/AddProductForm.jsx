"use client";

import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { uploadImage } from "@/lib/uploadImage";
import Image from "next/image";
import { sellerJobPost } from "@/lib/action/SellerJobPost";
import { toast } from "react-toastify";

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
    <form onSubmit={handleAddProduct} className="space-y-6">
      {/* Product Image */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">
          Product Image
        </label>

        <label className="border-2 border-dashed border-orange-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-orange-50 transition">
          {preview ? (
            <Image
              src={preview}
              alt="Preview"
              width={44}
              height={44}
              className="w-44 h-44 object-cover rounded-lg"
            />
          ) : (
            <>
              <FaCloudUploadAlt className="text-5xl text-orange-500 mb-3" />
              <p className="text-gray-600">
                Click to upload product image
              </p>
            </>
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
      </div>

      {/* Product Title */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">
          Product Title
        </label>

        <input
          type="text"
          name="title"
          required
          placeholder="Enter product title"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">
          Description
        </label>

        <textarea
          name="description"
          rows={4}
          required
          placeholder="Write product description..."
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
        />
      </div>

      {/* Category & Condition */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Category
          </label>

          <select
            name="category"
            required
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
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
          <label className="block font-medium text-gray-700 mb-2">
            Condition
          </label>

          <select
            name="condition"
            required
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option value="">Select Condition</option>
            <option>Used</option>
            <option>Like New</option>
            <option>Refurbished</option>
          </select>
        </div>
      </div>

      {/* Price & Stock */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Price ($)
          </label>

          <input
            type="number"
            name="price"
            min="0"
            step="0.01"
            required
            placeholder="0.00"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Stock Quantity
          </label>

          <input
            type="number"
            name="stock"
            min="0"
            required
            placeholder="0"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="reset"
          onClick={() => setPreview(null)}
          className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}