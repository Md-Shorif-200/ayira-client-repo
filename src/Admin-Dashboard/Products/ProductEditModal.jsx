import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

const ProductEditModal = ({ isOpen, onClose, product, onUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: product,
  });

  const submitHandler = async (data) => {
    console.log("Updated data:", data);
    onUpdate?.(data);
    onClose();
  };

  const inputStyle =
    "w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-xs font-medium text-gray-700 mb-1";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex  justify-center z-50">
      <div
        className="bg-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-lg shadow-lg p-6
                  translate-y-8 scale-95
                   animate-fadeInUp
                   transition-all duration-300 ease-out 
                    max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-lg font-semibold mb-4">Edit Product</h2>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Product Title */}
          <div>
            <label htmlFor="title" className={labelStyle}>
              Product Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title")}
              className={inputStyle}
              placeholder="e.g. Premium Cotton T-Shirt"
            />
          </div>

          {/* Grid Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="product_lines" className={labelStyle}>
                Product Lines
              </label>
              <select
                id="product_lines"
                {...register("product_lines")}
                className={inputStyle}
              >
                <option value="">Select a line</option>
                <option value="casual-wear">Casual Wear</option>
                <option value="active-wear">Active Wear</option>
                <option value="formal-wear">Formal Wear</option>
              </select>
            </div>

            <div>
              <label htmlFor="product_type" className={labelStyle}>
                Product Type
              </label>
              <select
                id="product_type"
                {...register("product_type")}
                className={inputStyle}
              >
                <option value="">Select a type</option>
                <option value="t-shirt">T-Shirt</option>
                <option value="jeans">Jeans</option>
                <option value="jacket">Jacket</option>
              </select>
            </div>

            <div>
              <label htmlFor="Sustainability" className={labelStyle}>
                Sustainability
              </label>
              <select
                id="Sustainability"
                {...register("Sustainability")}
                className={inputStyle}
              >
                <option value="">Select a type</option>
                <option value="eco-friendly">Eco-Friendly</option>
                <option value="recycled">Recycled Materials</option>
                <option value="standard">Standard</option>
              </select>
            </div>

            <div>
              <label htmlFor="Gender" className={labelStyle}>
                Gender
              </label>
              <select id="Gender" {...register("Gender")} className={inputStyle}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>

            <div>
              <label htmlFor="size" className={labelStyle}>
                Size
              </label>
              <select id="size" {...register("size")} className={inputStyle}>
                <option value="">Select a size</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            </div>

            <div>
              <label htmlFor="color" className={labelStyle}>
                Color
              </label>
              <select id="color" {...register("color")} className={inputStyle}>
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
            </div>

            <div>
              <label htmlFor="fit" className={labelStyle}>
                Fit
              </label>
              <select id="fit" {...register("fit")} className={inputStyle}>
                <option value="">Select a fit</option>
                <option value="slim-fit">Slim Fit</option>
                <option value="regular-fit">Regular Fit</option>
                <option value="loose-fit">Loose Fit</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className={labelStyle}>
                Price ($)
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                {...register("price")}
                className={inputStyle}
                placeholder="29.99"
              />
            </div>
          </div>

          {/* Description */}
          {/* <div>
            <label htmlFor="description" className={labelStyle}>
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              rows="3"
              className={inputStyle}
              placeholder="Enter product description..."
            />
          </div> */}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-70 text-sm"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin h-4 w-4 mr-2" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEditModal;
