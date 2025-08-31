import React from 'react';
import { FaStar, FaRegHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { RiLoopRightLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ProductCard = ({ product, viewType }) => {
  // Helper function to render rating stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  // Conditional rendering based on viewType
  if (viewType === "list") {
    // Renders the list view layout
    return (
      <Link to={'/product-details'}
        key={product.id}
        className="w-full  bg-white rounded-sm overflow-hidden shadow-sm md:flex gap-6 p-4"
      >
        {/* Product Image Section */}
        <div to={'/product-details'} className="md:w-2/5 flex-shrink-0">
          <div className="w-full h-[250px] sm:h-[280px] md:h-full bg-[#D6D6D6] rounded-sm" />
        </div>

        {/* Product Details Section */}
            <div className="details">
                  <div className=" flex flex-col">
          <div to={'/product-details '}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#ffbb42] transition-colors my-6 md:my-0">{product.title}</h3>
          </div>
          <div className="flex items-center text-xs mb-3">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="ml-2 text-gray-500">({product.reviews})</span>
          </div>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {product.description || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'}
          </p>
          <div className="flex space-x-2 mt-auto">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-5 h-5 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>

        {/* Actions Section */}
        <div className=" flex flex-col items-start justify-center   mt-6">
          <div className="flex items-baseline gap-3 mb-5">
            <p className="text-gray-400 line-through text-sm">{product.oldPrice || '$235'}</p>
            <p className="text-sm font-semibold text-gray-800">{product.price}</p>
          </div>
          <div className="flex items-center gap-4 mb-5 ">
            <button className="bg-[#ffbb42] hover:bg-yellow-500 text-black font-semibold py-2 px-2 lg:px-4 rounded-sm flex-grow text-base cursor-pointer">
              Add to cart
            </button>
            <button className="p-3 bg-gray-100 border border-gray-200 rounded-sm hover:bg-gray-200 cursor-pointer">
              <FaRegHeart className="text-sm" />
            </button>
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-black text-sm">
            <RiLoopRightLine className="text-lg" />
            <span>Compare</span>
          </button>
        </div>
            </div>
      </Link>
    );
  }

  // Renders the default grid view layout
  return (
    <Link to={'/product-details'}
      key={product.id}
      className="product_card w-full bg-white rounded-sm overflow-hidden shadow-sm group"
    >
      {/* Product Image Section */}
      <div className="relative w-full">
        <div className="w-full h-72 bg-[#D6D6D6]" />
        <div className="card_icons">
          <div className="absolute text-xl top-3 right-3 p-2 rounded-full cursor-pointer hover:scale-105 transition-transform">
            <FaRegHeart className="sub_title_color font-light" />
          </div>
          <div className="loop_icon absolute hidden text-xl top-12 right-3 p-2 rounded-full cursor-pointer hover:scale-105 transition-transform group-hover:block">
            <RiLoopRightLine className="sub_title_color font-light" />
          </div>
          <div className="search_icon absolute hidden text-xl top-20 right-3 p-2 rounded-full cursor-pointer hover:scale-105 transition-transform group-hover:block">
            <FaSearchPlus className="sub_title_color font-light" />
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="py-4 px-2">
        {/* Title and Rating */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="sub_title_color font-medium text-base">{product.title}</h3>
          <div className="flex items-center text-[10px] mb-1">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="ml-2 text-gray-500">({product.reviews})</span>
          </div>
        </div>

        {/* Price and Colors */}
        <div className="flex justify-between items-center relative">
          {/* Price */}
          <p className="product_price paragrap font-mono transition-opacity duration-300 group-hover:opacity-0">
            {product.price}
          </p>

          {/* Add to Cart Button */}
          <div className="shoping_cart_btn absolute opacity-0 flex items-center gap-2 underline text-black font-mono 
transition-all duration-500 transform rotate-x-90 group-hover:opacity-100 group-hover:rotate-x-0 cursor-pointer hover:text-[#ffbb42]">
            <FaShoppingCart /> <span>add to cart</span>
          </div>

          {/* Colors */}
          <div className="flex space-x-1">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;