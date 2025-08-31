import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoDiamondOutline } from "react-icons/io5";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import SweperProductCard from "../SweperProductCard";

export default function ProductsDetailsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const productsArray = [
    {
      id: 1,
      image: "https://i.ibb.co/ccxBNWnG/images-26.jpg",
      title: "Women floral dress",
      price: "$235.00",
      rating: 4.5,
      reviews: 212,
      colors: ["#4CAF50", "#E91E63"]
    },
    {
      id: 2,
      image: "https://i.ibb.co/Ndv7Y9k5/images-25.jpg",
      title: "Women denim jacket",
      price: "$249.00",
      rating: 4.0,
      reviews: 4,
      colors: ["#607D8B", "#B0BEC5", "#90A4AE"]
    },
    {
      id: 3,
      image: "https://i.ibb.co/cXKVvKmw/images-24.jpg",
      title: "Women floral dress",
      price: "$299.00",
      rating: 4.5,
      reviews: 25,
      colors: ["#607D8B", "#B0BEC5", "#90A4AE"]
    },
    {
      id: 4,
      image: "https://i.ibb.co/6755xFjp/images-23.jpg",
      title: "Elegant evening gown",
      price: "$350.00",
      rating: 5.0,
      reviews: 89,
      colors: ["#880E4F", "#F06292"]
    },
    {
      id: 5,
      image: "https://i.ibb.co/MDQsz42t/images-22.jpg",
      title: "Classic leather bag",
      price: "$150.00",
      rating: 4.0,
      reviews: 110,
      colors: ["#4E342E", "#D7CCC8"]
    }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-20">
      {/* Title */}
      <div className="title flex justify-center flex-col items-center mt-10">
        <div className="text-[30px] font-semibold sub_title_color capitalize">
          You may also like
        </div>
        <div className="icons flex items-center gap-1">
          <TfiLayoutLineSolid />
          <IoDiamondOutline />
          <TfiLayoutLineSolid />
        </div>
      </div>

      {/* Custom Arrows */}
      <div className="flex justify-end mb-4 gap-2">
        <div
          ref={prevRef}
          className="cursor-pointer text-2xl p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <HiArrowLongLeft />
        </div>
        <div
          ref={nextRef}
          className="cursor-pointer text-2xl p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <HiArrowLongRight />
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerGroup={1}
        breakpoints={{
          0: { slidesPerView: 1 },    
          640: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 } 
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
