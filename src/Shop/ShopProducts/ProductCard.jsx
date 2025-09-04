import React from "react";
import { FaRegHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { RiLoopRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CustomStarRating from "./Components/CustomStarRating";

const ProductCard = ({ product, viewType }) => {
  // Conditional rendering based on viewType
  if (viewType === "list") {
    // Renders the list view layout
    return (
      <Link
        to={"/product-details"}
        key={product.id}
        className="w-full bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow md:flex gap-6 p-4"
      >
        {/* Product Image Section */}
        <div className="md:w-2/5 flex-shrink-0 relative">
          <div className="w-full h-[250px] sm:h-[280px] md:h-64 bg-[#D6D6D6] rounded-md"></div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-between flex-grow mt-4 md:mt-0">
                    <div>
                          {/* Title + Rating */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 hover:text-[#ffbb42] transition-colors mb-2">
              {product.title}
            </h3>
            <div className="flex items-center text-sm mb-3">
              <CustomStarRating numberOfStars={5} />
              <span className="ml-2 text-gray-500">({product.reviews})</span>
            </div>
          </div>

          {/* Colors */}
          <div className="flex space-x-2 mb-4">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-5 h-5 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>

          {/* Price + Buttons */}
          <div className="">
            {/* Price */}
            <div className="flex items-baseline gap-3">
              {product.oldPrice && (
                <p className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </p>
              )}
              <p className="text-lg font-bold text-gray-900">{product.price}</p>
            </div>
          </div>
                    </div>
          {/* Buttons */}
          <div className="flex gap-2">
            <button className="bg-[#ffbb42] hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-md text-sm uppercase transition-colors">
              Order Now
            </button>
            <button className="p-3 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
              <FaRegHeart className="text-gray-600 hover:text-red-500 text-base" />
            </button>
          </div>
        </div>
      </Link>
    );
  }

  // Renders the default grid view layout (আপনার অনুরোধ অনুযায়ী পরিবর্তিত)
  return (
    <Link
      to={"/product-details"}
      key={product.id}
      className="group w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
    >
      {/* Product Image Section */}
      <div className=" w-full">
        <div className="w-full h-64 bg-[#D6D6D6]"></div>
      </div>

      {/* Product Details Section */}
      <div className="pt-2 pb-3 px-4 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-gray-800 font-semibold text-lg mb-1 hover:text-[#ffbb42] transition-colors line-clamp-1">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-1">
          <CustomStarRating numberOfStars={5} />
          <span className="ml-2 text-sm text-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* Price & Colors */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-bold text-gray-900">{product.price}</p>
          <div className="flex space-x-1">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-5 h-5 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-[#ffbb42] hover:bg-yellow-500 text-black font-semibold py-2 rounded-md text-sm uppercase transition-colors cursor-pointer">
            Order Now
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:white hover:border-yellow-400 transition-colors cursor-pointer">
            <FaRegHeart className="" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
