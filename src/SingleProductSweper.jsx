import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import SweperProductCard from "./SweperProductCard";

export default function SingleProductSweper() {
  // Static product data
  const productsArray = [
    {
      id: 1,
      image: "https://i.ibb.co.com/ccxBNWnG/images-26.jpg",
      title: "Women floral dress",
      price: "$235.00",
      rating: 4.5,
      reviews: 212,
      colors: ["#4CAF50", "#E91E63"]
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/Ndv7Y9k5/images-25.jpg",
      title: "Women denim jacket",
      price: "$249.00",
      rating: 4.0,
      reviews: 4,
      colors: ["#607D8B", "#B0BEC5", "#90A4AE"]
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/cXKVvKmw/images-24.jpg",
      title: "Women floral dress",
      price: "$299.00",
      rating: 4.5,
      reviews: 25,
      colors: ["#607D8B", "#B0BEC5", "#90A4AE"]
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/6755xFjp/images-23.jpg",
      title: "Elegant evening gown",
      price: "$350.00",
      rating: 5.0,
      reviews: 89,
      colors: ["#880E4F", "#F06292"]
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/MDQsz42t/images-22.jpg",
      title: "Classic leather bag",
      price: "$150.00",
      rating: 4.0,
      reviews: 110,
      colors: ["#4E342E", "#D7CCC8"]
    }
  ];

  return (
    <>
         {/* Title */}
      <div className="mb-6 mt-6">
        <h3 className="text-lg font-bold tracking-wide uppercase">
          Best Selling Items
        </h3>
        <div className="mt-2 mb-4 relative flex ">
          <div className="absolute w-40 h-0.5 bg-gray-100"></div>
          <div className="absolute w-12 h-0.5 bg-yellow-400 rounded"></div>
        </div>
      </div>



      {/* Swiper Slider */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        className="mySwiper "
      >

     


        {productsArray.map((product) => (
          <SwiperSlide key={product.id}>
       <SweperProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
