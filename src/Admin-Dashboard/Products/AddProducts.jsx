import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }, // 'errors' object destructure করে নিলাম
  } = useForm();

  const onSubmit = (data) => {
    // এখানে আপনি সার্ভারে ডেটা পাঠাবেন।
    // এই উদাহরণে, আমরা শুধু কনসোলে ডেটা দেখব।
    console.log("Form Data:", data);
    console.log("Main Image File:", data.mainImage[0]); // একটি ফাইল
    console.log("Gallery Image Files:", data.galleryImages); // একাধিক ফাইলের একটি তালিকা
    
    // reset(); // ফর্ম রিসেট করতে চাইলে এটি uncomment করুন
  };

  // ইনপুট এবং সিলেক্টের জন্য কমন স্টাইল
  const inputStyle = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-[30px] font-bold text-gray-800 mb-6">Add New Product</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 border border-gray-200 rounded-lg">
          {/* Product Title */}
          <div>
            <label htmlFor="title" className={labelStyle}>Product Title</label>
            <input
              id="title"
              type="text"
              {...register("title", { required: "Product title is required" })}
              className={inputStyle}
              placeholder="e.g. Premium Cotton T-Shirt"
            />
             {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
          </div>

          {/* Grid for select inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ... অন্যান্য ইনপুট ফিল্ডগুলো এখানে অপরিবর্তিত থাকবে ... */}
            <div>
              <label htmlFor="product_lines" className={labelStyle}>Product Lines</label>
              <select id="product_lines" {...register("product_lines")} className={inputStyle}>
                <option value="">Select a line</option>
                <option value="casual-wear">Casual Wear</option>
                <option value="active-wear">Active Wear</option>
                <option value="formal-wear">Formal Wear</option>
              </select>
            </div>

            <div>
              <label htmlFor="product_type" className={labelStyle}>Product Type</label>
              <select id="product_type" {...register("product_type")} className={inputStyle}>
                <option value="">Select a type</option>
                <option value="t-shirt">T-Shirt</option>
                <option value="jeans">Jeans</option>
                <option value="jacket">Jacket</option>
              </select>
            </div>

            <div>
              <label htmlFor="Sustainability" className={labelStyle}>Sustainability</label>
              <select id="Sustainability" {...register("Sustainability")} className={inputStyle}>
                <option value="">Select a type</option>
                <option value="eco-friendly">Eco-Friendly</option>
                <option value="recycled">Recycled Materials</option>
                <option value="standard">Standard</option>
              </select>
            </div>

            <div>
              <label htmlFor="Gender" className={labelStyle}>Gender</label>
              <select id="Gender" {...register("Gender")} className={inputStyle}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="size" className={labelStyle}>Size</label>
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
              <label htmlFor="color" className={labelStyle}>Color</label>
              <select id="color" {...register("colors")} className={inputStyle}>
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="fit" className={labelStyle}>Fit</label>
              <select id="fit" {...register("fit")} className={inputStyle}>
                <option value="">Select a fit</option>
                <option value="slim-fit">Slim Fit</option>
                <option value="regular-fit">Regular Fit</option>
                <option value="loose-fit">Loose Fit</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className={labelStyle}>Price ($)</label>
              <input
                id="price"
                type="number"
                step="0.01"
                {...register("price", { required: "Price is required" })}
                className={inputStyle}
                placeholder="29.99"
              />
               {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
            </div>
          </div>
          
         {/* img upload  */}
          <div className="img_upload grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {/* Main Image Upload (Updated) */}
          <div>
            <label htmlFor="mainImage" className={labelStyle}>Upload Main Image</label>
            <input
              id="mainImage"
              type="file"
              accept="image/*"
              {...register("mainImage", { required: "Main image is required" })}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
            />
            {errors.mainImage && <p className="text-red-500 text-xs mt-1">{errors.mainImage.message}</p>}
          </div>

          {/* Gallery Images Upload (New) */}
          <div>
            <label htmlFor="galleryImages" className={labelStyle}>Upload Gallery Images (multiple)</label>
            <input
              id="galleryImages"
              type="file"
              accept="image/*"
              multiple // এই অ্যাট্রিবিউট একাধিক ফাইল সিলেক্ট করতে দেয়
              {...register("galleryImages")}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>
          </div>

          {/* Description */}
          <div>
              <label htmlFor="description" className={labelStyle}>Description</label>
              <textarea
                id="description"
                rows="4"
                {...register("description")}
                className={inputStyle}
                placeholder="Enter Product Description"
              />
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
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;