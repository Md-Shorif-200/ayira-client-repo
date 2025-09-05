import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

const ProductBrand = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Brand Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API delay
    reset();
  };

  // Common styles
  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-3";

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-[30px] font-bold text-gray-800 mb-6">
          Add Product Brand
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-6 border border-gray-200 rounded-lg"
        >
    


          {/* Brand Image Upload */}
          <div>
            <label htmlFor="brand-img" className={labelStyle}>
              Upload Brand Logo
            </label>
            <input
              id="brand-img"
              type="file"
              {...register("brandImg")}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
            />
          </div>

          {/* Submit Button */}
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
                "Add Brand"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductBrand;
