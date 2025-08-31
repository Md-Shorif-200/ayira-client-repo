import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaVoicemail,
} from "react-icons/fa";

// Assuming you have an image for the logo
import logo from "../public/logo.webp";
import { MdEmail } from "react-icons/md";
import appstore_img from "../public/app-stor.webp";
import googlePlay_img from "../public/google-play.webp";
import payment_img from "../public/payment.webp";
// px-6 sm:px-14 md:px-24 lg:px-8 xl:px-20

const Footer = () => {
  return (
    <footer className="">
      <div className=" w-full md:flex flex-wrap">
        {/* Ayira Logo & Contact Info Section */}
        <div className="bg-[#EFEFEF] footer_logo w-full lg:w-[27%] py-14 pl-6 sm:pl-14  lg:pl-8 xl:pl-[90px]">
          <img src={logo} alt="Ayira Logo" className="w-24 h-auto " />
          <h3 className="text-[16px] font-semibold sub_title_color my-5 uppercase">
            QUESTION OR FEEDBACK?
          </h3>
          <div className="flex items-center gap-2 my-2">
            <FaPhoneAlt></FaPhoneAlt>
            <span className="text-[16px] font-medium  mr-2">+018 900 6690</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <MdEmail></MdEmail>
            <span className="text-[16px] font-medium ">support@ariya.com</span>
          </div>
          {/* App Store Buttons */}
          <div className="flex gap-2 mt-8">
            {/* Assuming you have images for the app store buttons */}
            <img src={appstore_img} alt="" />
            <img src={googlePlay_img} alt="" />
          </div>
        </div>

        {/* --------footer list */}
        <div className="footer_list w-full lg:w-[72%]  bg-[#F6F6F6] grid grid-cols-3 gap-10 py-14 px-6 sm:px-14  lg:px-8 xl:px-8">
          {/* Company Section */}
          <div className="">
            {/* Title */}
            <div className="mb-10">
              <h3 className="text-sm font-bold tracking-wide uppercase">
                Company
              </h3>
              <div className="mt-2 mb-4 relative">
                <div className=" absolute top-0  w-full h-0.5 bg-gray-200"></div>
                <div className=" absolute top-0   w-12 h-0.5 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Shop Section */}
          <div className="">
              {/* Title */}
            <div className="mb-10">
              <h3 className="text-sm font-bold tracking-wide uppercase">
                shop
              </h3>
              <div className="mt-2 mb-4 relative">
                <div className=" absolute top-0  w-full h-0.5 bg-gray-200"></div>
                <div className=" absolute top-0   w-12 h-0.5 bg-yellow-400 rounded"></div>
              </div>
            </div>


            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Bags & Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Top Brands
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Sale & Special Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="">
           {/* Title */}
            <div className="mb-10">
              <h3 className="text-sm font-bold tracking-wide uppercase">
                policies
              </h3>
              <div className="mt-2 mb-4 relative">
                <div className=" absolute top-0  w-full h-0.5 bg-gray-200"></div>
                <div className=" absolute top-0   w-12 h-0.5 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Return & Refund
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Payment Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Grievance Cell
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Social Media Section */}
      <div className="bg-[#E4E4E4] paragrap py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20  flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-base mb-4 md:mb-0">&copy; 2021 Ayira copyright</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Payment Icons */}
        <div className="">
            <img src={payment_img} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
