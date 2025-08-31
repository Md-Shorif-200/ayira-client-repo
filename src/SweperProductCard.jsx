import React from 'react';
import { FaStar, FaRegHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { RiLoopRightLine } from "react-icons/ri";



const SweperProductCard = ({product}) => {

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


      
    return (
      <div
            key={product.id}
            className="product_card w-full bg-white rounded-sm overflow-hidden shadow-sm group"
          >
            {/* Product Image Section */}

<div className="relative w-full h-74 bg-[#D6D6D6] overflow-hidden rounded-sm">
  {/* Icons */}
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
          </div>
    );
};

export default SweperProductCard;