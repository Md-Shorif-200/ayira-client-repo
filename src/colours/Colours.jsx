// import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";
import { PiFilePdfLight } from "react-icons/pi";
import ExclusiveColours from "./ExclusiveColours";
import HighlightColours from "./HighlightColours";
import CommonBanner from "../Components/CommonBanner";

const banner_img = "https://i.ibb.co.com/n8mm55BV/colours.webp";

const Colours = () => {
  return (
    <div className="">
      {/* banner */}
      <CommonBanner
        title={"colours"}
        breadcrumb={"colours"}
        backgroundImage={banner_img}
      ></CommonBanner>
      {/* color card  */}
      <div className="lg:px-32">
        <div className="color_card w-full flex gap-10 bg-white shadow-lg p-8 mt-10 mb-20">
          <div className="section_cnt  w-[60%] pr-16">
            <h2 className="text-xl capitalize font-semibold mb-8">
              Unlimited Customized Color Possibilities
            </h2>
            <p className="text-[14px] capitalize text-[#777777] text-justify">
              Unlimited customized color possibilities enable you to create the
              perfect shades for your projects. With precision matching, expert
              guidance, and a wide range of finishes, our service allows you to
              craft unique, personalized colors that reflect your exact vision.
              Whether you are in fashion, design, or printing, we offer the
              ultimate solution for limitless color customization, ensuring
              vibrant and consistent results every time. Let your creativity
              flow without boundaries! Allow you to create the perfect shades
              for your projects. With precision matching, expert guidance, and
              an expansive range of finishes, our service allows you to craft
              unique, personalized colors that reflect your exact vision.
              Whether you are in fashion, design, or printing, we provide the
              ultimate solution for limitless color customization, ensuring
              vibrant, consistent results every time. Let your creativity flow
              without boundaries!
            </p>

            <div className="btn bg-[#D9D5C7] w-[160px]  text-black capitalize text-base font-normal h-[40px] flex gap-4  justify-center items-center  rounded-sm my-8 ">
              <PiFilePdfLight></PiFilePdfLight>
              colour card
            </div>
          </div>

          <div className="colours_card_img   w-[40%] h-[300px] relative">
            <img
              src="https://i.ibb.co/cKyVZSNm/colour-Photo.webp"
              alt="Banner Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* colour collections */}
      <div className="colour_collections lg:px-32">
        <ExclusiveColours></ExclusiveColours>
        <HighlightColours></HighlightColours>
      </div>
    </div>
  );
};

export default Colours;
