import React from "react";
import { FaHome } from "react-icons/fa";
import { FaTag, FaUser, FaRegComment, FaArrowRight } from "react-icons/fa";
import BlogPosts from "./BlogPosts";
import CommonBanner from "../Components/CommonBanner";

const Blog = () => {
  return (
    <div>
      {/* Banner */}
       <CommonBanner title={'blog'} breadcrumb={'blog'}></CommonBanner>

      {/* --------- blog caards */}

      <div className=" my-10 bg-white   overflow-hidden lg:px-32 grid grid-cols-2 ">
        <div className="relative w-full   bg-gray-200">
          {/* Date Badge */}

          <div className="absolute top-0 left-0 bg-yellow-400 text-gray-800 text-center flex flex-col px-4 py-1">
            <span className="text-base font-semibold">05</span>
            <span className="text-base   tracking-widest ">nov</span>
          </div>
        </div>

        <div className="relative w-full  px-8 pt-8  bg-[#EFEFEF]">
          <div className="pb-16">
            <h2 className="text-3xl font-semibold text-[#262626] mb-4">
              Contrary to popular belief
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed  mb-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>

            {/* Meta Info: Category, Author, Comments */}
            <div className="flex items-center space-x-6 text-gray-500 mb-10">
              <div className="flex items-center space-x-2">
                <FaTag />
                <span>Beauty</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUser />
                <span>Rachel</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegComment />
                <span>0</span>
              </div>
            </div>
          </div>

          {/* Large Background Text */}

          <div className="absolute bottom-0  left-0 text-8xl font-semibold  text-[#E3E3E3] select-none pl-6">
            BEAUTY
          </div>

          {/* Arrow Button */}

          <button className="absolute bottom-0 right-0 bg-yellow-400 p-6">
            <FaArrowRight className="text-2xl text-gray-800" />
          </button>
        </div>
      </div>

            {/* ---------- blog-posts */}
             <div className="blog_posts lg:px-32">
                    <BlogPosts></BlogPosts>
             </div>
    </div>
  );
};

export default Blog;
