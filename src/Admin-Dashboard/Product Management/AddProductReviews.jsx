import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

const AddProductReviews = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("New Review Added:", data);

    // এখানে API call করবেন server এ পাঠানোর জন্য
    // await api.post("/reviews", data);

    reset();
  };

  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-[30px] font-bold text-gray-800 mb-6">
          Add Product Review
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-6 border border-gray-200 rounded-lg"
        >
          {/* Reviewer Name */}
          <div>
            <label htmlFor="name" className={labelStyle}>
              Reviewer Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={inputStyle}
              placeholder="e.g. John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

               {/* Total ratings */}
          <div>
            <label htmlFor="ratings" className={labelStyle}>
              Total ratings
            </label>
            <input
              id="ratings"
              type="number"
              {...register("ratings", {
                required: "Total ratings is required",
                min: { value: 1, message: "Minimum 1 review required" },
                max: { value: 5, message: "Maximum 5 reviews are allowed" },
              })}
              className={inputStyle}
              placeholder="e.g. 5"
            />
            {errors.ratings && (
              <p className="text-red-500 text-xs mt-1">
                {errors.ratings.message}
              </p>
            )}
          </div>



          {/* Total Reviews */}
          <div>
            <label htmlFor="reviews" className={labelStyle}>
              Total Reviews
            </label>
            <input
              id="reviews"
              type="number"
              {...register("reviews", {
                required: "Total reviews is required",
                min: { value: 1, message: "Minimum 1 review required" },
              })}
              className={inputStyle}
              placeholder="e.g. 120"
            />
            {errors.reviews && (
              <p className="text-red-500 text-xs mt-1">
                {errors.reviews.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className={labelStyle}>
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              rows="4"
              className={inputStyle}
              placeholder="Write the review description..."
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                  Submitting...
                </>
              ) : (
                "Add Review"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductReviews;
