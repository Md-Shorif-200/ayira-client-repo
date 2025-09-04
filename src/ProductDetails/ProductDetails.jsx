import React, { useState, useRef } from 'react';
import {
  FaHome,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaHeart,
  FaSyncAlt,
  FaSearchPlus,
  FaChevronUp,
  FaChevronDown,
} from 'react-icons/fa';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { FiTruck } from 'react-icons/fi';
import { RiRefund2Line } from 'react-icons/ri';

import ProductInfoTabs from './ProductInfoTabs';
import ProductsDetailsSlider from './ProductsDetailsSlider';
import Footer from '../Footer';
import FeaturesBanner from './FeaturesBanner';

// Star Rating Component
const StarRating = ({ rating, reviews }) => {
  const fullStars = Math.floor(rating);
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="text-gray-600 text-sm ml-2">({reviews} customer reviews)</span>
    </div>
  );
};

const ProductDetails = () => {
  const features = [
    {
      icon: <HiOutlineShieldCheck />,
      line1: '100% Original',
      line2: 'Products',
    },
    {
      icon: <FiTruck />,
      line1: 'Free Delivery',
      line2: 'on above...',
    },
    {
      icon: <RiRefund2Line />,
      line1: 'Easy Return',
      line2: 'upto 14 days',
    },
  ];

  const product = {
    title: 'Women floral dress',
    rating: 5,
    reviews: 6,
    originalPrice: '$39.00',
    discountedPrice: '$39.00',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. Perfect for casual outings and parties, this floral dress adds an elegant charm to your wardrobe.",
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Blue', hex: '#26A6B5' },
      { name: 'Green', hex: '#8BC34A' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://i.ibb.co.com/Ndv7Y9k5/images-25.jpg',
      'https://i.ibb.co.com/Ndv7Y9k5/images-25.jpg',
      'https://i.ibb.co.com/Ndv7Y9k5/images-25.jpg',
      'https://i.ibb.co.com/Ndv7Y9k5/images-25.jpg',
      'https://i.ibb.co.com/Ndv7Y9k5/images-25.jpg',
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const thumbnailContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (thumbnailContainerRef.current) {
      const scrollAmount = 100;
      thumbnailContainerRef.current.scrollBy({
        top: direction === 'up' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="font-sans py-4">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 border-t border-b border-gray-300 flex justify-between items-center px-4 sm:px-8 lg:px-16">
        <div className="flex items-center text-sm text-gray-600">
          <a href="#" className="flex items-center hover:text-gray-800 transition-colors">
            <FaHome className="mr-1.5" />
            Home
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Shop
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-medium text-gray-800">{product.title}</span>
        </div>
        <div className="flex space-x-4 text-gray-700">
          <a href="#" className="hover:text-black transition-colors">
            <FaArrowLeft />
          </a>
          <a href="#" className="hover:text-black transition-colors">
            <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10">
          {/* Image Section */}
          <div className="flex gap-4">
            {/* Thumbnail Slider */}
            <div className="flex flex-col items-center space-y-2">
              <button
                onClick={() => handleScroll('up')}
                className="p-2 text-gray-500 hover:text-black"
              >
                <FaChevronUp />
              </button>
              <div
                ref={thumbnailContainerRef}
                className="h-[300px] overflow-y-hidden space-y-2 scrollbar-thin"
              >
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-24 object-cover cursor-pointer border-2 rounded-md transition 
                      ${selectedImage === img ? 'border-yellow-500 shadow-md' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
              <button
                onClick={() => handleScroll('down')}
                className="p-2 text-gray-500 hover:text-black"
              >
                <FaChevronDown />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative flex-1 overflow-hidden group rounded-md shadow-sm bg-amber-200 h-[350px] sm:h-[450px] ">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                <FaSearchPlus className="text-gray-700" />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center mt-6 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="mt-2">
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>

            <div className="mt-4 flex items-baseline space-x-2">
              <p className="text-2xl font-semibold text-gray-900">
                {product.discountedPrice}
              </p>
              <p className="text-lg text-gray-500 line-through">
                {product.originalPrice}
              </p>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>

            {/* Color Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color :</h3>
              <div className="flex items-center space-x-3 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition 
                      ${selectedColor === color.name ? 'border-gray-900' : 'border-transparent'}`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-900">Size :</h3>
                <a
                  href="#"
                  className="text-sm font-medium text-yellow-600 hover:text-yellow-500"
                >
                  Size chart
                </a>
              </div>
              <div className="flex items-center space-x-3 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition 
                      ${
                        selectedSize === size
                          ? 'bg-yellow-500 text-white border-yellow-500'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-md w-full sm:w-auto">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-l border-r border-gray-300"
                />
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="w-full sm:flex-1 bg-yellow-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-600 transition duration-300">
                Add to cart
              </button>
            </div>

            {/* Wishlist and Compare */}
            <div className="mt-6 flex flex-col sm:flex-row items-center sm:space-x-6 gap-3 text-sm">
              <a href="#" className="flex items-center text-gray-600 hover:text-black">
                <FaHeart className="mr-2" /> Add to wishlist
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-black">
                <FaSyncAlt className="mr-2" /> Compare
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg w-full sm:w-auto"
                >
                  <div className="text-3xl text-gray-800">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {feature.line1}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.line2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra Sections */}
        <ProductInfoTabs />
        <ProductsDetailsSlider />
        <FeaturesBanner />
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
