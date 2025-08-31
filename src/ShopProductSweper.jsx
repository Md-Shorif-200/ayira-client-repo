import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SweperProductCard from "./SweperProductCard";
import { IoIosArrowBack } from "react-icons/io";
 import { IoIosArrowForward } from "react-icons/io";


export default function ShopProductSweper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Static product data
  const productsArray = [
    {
      id: 1,
      image: "https://i.ibb.co.com/ccxBNWnG/images-26.jpg",
      title: "Women floral dress",
      price: "$235.00",
      rating: 4.5,
      reviews: 212,
      colors: ["#4CAF50", "#E91E63"],
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/Ndv7Y9k5/images-25.jpg",
      title: "Women denim jacket",
      price: "$249.00",
      rating: 4.0,
      reviews: 4,
      colors: ["#607D8B", "#B0BEC5", "#90A4AE"],
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/cXKVvKmw/images-24.jpg",
      title: "Women floral dress",
      price: "$299.00",
      rating: 4.5,
      reviews: 25,
      colors: ["#607D8B", "#B0BEC5", "#90A4AE"],
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/6755xFjp/images-23.jpg",
      title: "Elegant evening gown",
      price: "$350.00",
      rating: 5.0,
      reviews: 89,
      colors: ["#880E4F", "#F06292"],
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/MDQsz42t/images-22.jpg",
      title: "Classic leather bag",
      price: "$150.00",
      rating: 4.0,
      reviews: 110,
      colors: ["#4E342E", "#D7CCC8"],
    },
  ];

  return (
    <div className="xl:p-4 mb-14 lg:mb-0 relative">
      {/* Title */}
      <div className="mb-6 mt-6">
        <h3 className="text-lg font-bold tracking-wide uppercase">
          Best Selling Items
        </h3>
        <div className="mt-2 mb-4 relative flex">
          <div className="absolute w-40 h-0.5 bg-gray-100"></div>
          <div className="absolute w-12 h-0.5 bg-yellow-400 rounded"></div>
        </div>
      </div>

      {/* Custom Arrows */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 
                   text-gray-black font-extralight text-4xl "
      >
        <IoIosArrowBack />
      </button>

      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 
                   text-gray-black font-extralight text-4xl "
      >
        <IoIosArrowForward />
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        className="mySwiper"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 1 },
        }}
      >
        {productsArray.map((product) => (
          <SwiperSlide key={product.id}>
            <SweperProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
