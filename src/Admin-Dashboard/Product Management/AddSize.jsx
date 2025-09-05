import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';

const AddSize = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }, 
  } = useForm();

  const onSubmit = (data) => {

    

  };


  const inputStyle = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className=" w-full  min-h-screen flex items-center justify-center p-4">
  <div className="max-w-4xl w-full p-8">

        <h1 className="text-[30px] font-bold text-gray-800 mb-6">Add Size</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 border border-gray-200 rounded-lg">
          {/* Product Title */}
          <div>
            {/* <label htmlFor="title" className={labelStyle}>Add New Category</label> */}
            <input
              id="productSize"
              type="text"
              {...register("productSize", { required: "Product Sub Category is required" })}
              className={inputStyle}
              placeholder="e.g. S,M,L,XL"
            />
             {errors.productSize && <p className="text-red-500 text-xs mt-1">{errors.productSize.message}</p>}
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
                "Add"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSize;