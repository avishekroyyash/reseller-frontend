"use client";

import { ReviewPost } from "@/lib/action/ReviewPost";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaRegStar,
  FaUserCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ProductReview({
  productId,
  reviews = [],
  user,
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
   const router = useRouter()
  const handleSubmit = async (e) => {
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
    // console.log(review.productId,' REVIEW - POST')
    await ReviewPost(review);

    toast.success("Your review has been submitted.");
    // router.push(`/all-products/${review.productId}`)
    
    setComment("");
    setRating(0);
    router.refresh()
  };

  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold text-gray-800 dark:text-white"
      >
        Customer Reviews
      </motion.h2>

      {/* Review Form */}

      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-lg transition-colors duration-300"
      >
        <h3 className="mb-6 text-xl font-semibold text-gray-800 dark:text-white">
          Write a Review
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Rating */}

          <div className="mb-6 flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                type="button"
                whileHover={{
                  scale: 1.25,
                  rotate: 15,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                {star <= (hover || rating) ? (
                  <FaStar
                    size={30}
                    className="text-yellow-400"
                  />
                ) : (
                  <FaRegStar
                    size={30}
                    className="text-gray-300 dark:text-gray-600"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Comment */}

          <motion.textarea
            whileFocus={{
              scale: 1.01,
            }}
            rows={5}
            placeholder="Share your experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 outline-none focus:border-orange-500"
          />

          {/* Button */}

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            type="submit"
            className="mt-6 flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600 shadow-lg"
          >
            <FaPaperPlane />
            Submit Review
          </motion.button>
        </form>
      </motion.div>

      {/* Reviews */}

      <motion.div
        className="mt-10 space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {reviews.length === 0 && (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 p-8 text-center text-gray-500 dark:text-gray-400"
          >
            No reviews yet.
          </motion.div>
        )}

        {reviews.slice(0, 3).map((review) => (
          <motion.div
            key={review._id}
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            whileHover={{
              y: -6,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all"
          >
            {/* Header */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                {review.userImage ? (
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                  >
                    <Image
                      src={review.userImage}
                      alt={review.userName}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <FaUserCircle
                    size={45}
                    className="text-gray-400"
                  />
                )}

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {review.userName}
                  </h4>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(
                      review.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Rating */}

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <FaStar
                      className={
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Comment */}

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
              {review.comment}
            </p>
          </motion.div>
        ))}

        {reviews.length > 3 && (
          <motion.button
            whileHover={{
              x: 6,
            }}
            className="font-semibold text-orange-500 hover:underline"
          >
            View All Reviews →
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}