"use client";

import { ReviewPost } from "@/lib/action/ReviewPost";
import Image from "next/image";
import { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaUserCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { TbChevronsDownLeft } from "react-icons/tb";
import { toast } from "react-toastify";

export default function ProductReview({
  productId,
  reviews = [],
  user,
}) {
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    // console.log(user,'USER');
    // console.log(comment,'COMMETN');
    // console.log(rating,'RAITING');
    e.preventDefault();

    if (!rating || !comment) {
      return toast.error("Please give a rating and comment.");
    }

    const review = {
      productId,
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image || "",
      rating,
      comment,
    };

    console.log(review);

    const post = await ReviewPost(review)
    toast.success('Your opinion Successfull')
    console.log(post,'REVIEW-POST');
    /*
      await ReviewPost(review);

      or

      await fetch("/api/reviews",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(review)
      })

    */

    setComment("");
    setRating(0);
  };

  return (
    <div className="mt-12">

      {/* Heading */}

      <h2 className="mb-8 text-3xl font-bold text-gray-800">
        Customer Reviews
      </h2>

      {/* ================= Review Form ================= */}

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">

        <h3 className="mb-6 text-xl font-semibold">
          Write a Review
        </h3>

        {/* Rating */}

 <form onSubmit={handleSubmit}>
  {/* Rating */}

  <div className="mb-6 flex gap-2">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => setRating(star)}
        onMouseEnter={() => setHover(star)}
        onMouseLeave={() => setHover(0)}
      >
        {star <= (hover || rating) ? (
          <FaStar size={30} className="text-yellow-400" />
        ) : (
          <FaRegStar size={30} className="text-gray-300" />
        )}
      </button>
    ))}
  </div>

  {/* Comment */}

  <textarea
    rows={5}
    placeholder="Share your experience..."
    className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-orange-500"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
  />

  <button
    type="submit"
    className="mt-6 flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
  >
    <FaPaperPlane />
    Submit Review
  </button>
</form>

      </div>

      {/* ================= Reviews ================= */}

      <div className="mt-10 space-y-6">

        {reviews.length === 0 && (
          <div className="rounded-xl border border-dashed p-8 text-center text-gray-500">
            No reviews yet.
          </div>
        )}

        {reviews.slice(0, 3).map((review) => (
          <div
            key={review._id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            {/* Header */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                {review.userImage ? (
                  <Image
                    src={review.userImage}
                    alt={review.userName[0]}
                    width={12}
                    height={12}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle
                    size={45}
                    className="text-gray-400"
                  />
                )}

                <div>

                  <h4 className="font-semibold">
                    {review.userName}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {new Date(
                      review.createdAt
                    ).toLocaleDateString()}
                  </p>

                </div>

              </div>

              {/* Rating */}

              <div className="flex">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}

              </div>

            </div>

            {/* Comment */}

            <p className="mt-5 leading-7 text-gray-600">
              {review.comment}
            </p>

          </div>
        ))}

        {reviews.length > 3 && (
          <button className="font-semibold text-orange-500 hover:underline">
            View All Reviews →
          </button>
        )}

      </div>
    </div>
  );
}