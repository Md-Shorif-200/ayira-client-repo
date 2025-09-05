import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { SketchPicker } from "react-color";

const AddProductColour = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      color: selectedColor,
      ...data,
    };
    console.log("New Colour Added:", payload);



    reset();
    setSelectedColor("#000000");
  };

  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-3";

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full p-8">
        <h1 className="text-[30px] font-bold text-gray-800 mb-6">
          Add New Colour
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-6 border border-gray-200 rounded-lg"
        >
       

          {/* Colour Picker using react-color */}
          <div>
            {/* <label className={labelStyle}>Pick a Colour</label> */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* React Color Picker */}
              <SketchPicker
                color={selectedColor}
                onChangeComplete={(color) => setSelectedColor(color.hex)}
              />

              {/* Preview */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-20 h-12 border rounded-md shadow-inner"
                  style={{ backgroundColor: selectedColor }}
                ></div>
                <span className="text-gray-600 text-sm">{selectedColor}</span>
              </div>
            </div>
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
                "Add Colour"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductColour;
