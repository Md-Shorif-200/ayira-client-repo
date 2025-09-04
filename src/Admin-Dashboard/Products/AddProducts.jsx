import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();


  const onSubmit = (data) => {
    // In a real app, you would send this data to a server.
    // For this example, we'll just log it to the console.
    console.log(data);
    // alert('Product added! Check the console for the form data.');
  };

  // Common styles for inputs and selects
  const inputStyle = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className=" min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full  p-8 r">
        <h1 className="text-[30px] font-bold text-gray-800 mb-6">Add New Product</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 border border-gray-200 rounded-lg">
          {/* Product Title */}
          <div>
            <label htmlFor="title" className={labelStyle}>Product Title</label>
            <input
              id="title"
              type="text"
              {...register("title")}
              className={inputStyle}
              placeholder="e.g. Premium Cotton T-Shirt"
            />
          </div>

          {/* Grid for select inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <select id="color" {...register("color")} className={inputStyle}>
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
                {...register("price")}
                className={inputStyle}
                placeholder="29.99"
              />
            </div>
          </div>
          
          {/* File Upload */}
          <div>
            <label htmlFor="upload-img" className={labelStyle}>Upload Image</label>
            <input
              id="upload-img"
              type="file"
              {...register("upload-img")}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
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