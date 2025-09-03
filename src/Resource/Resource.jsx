import React from "react";
import CommonBanner from "../Components/CommonBanner";
import ResourceCard from "./ResourceCard";
const banner_img = "https://i.ibb.co.com/QFrKjBwS/resource.webp";

const Resource = () => {
  return (
    <div>
      {/* banner */}
      <CommonBanner title={"resource"} breadcrumb={"resource"}></CommonBanner>

      <div className="resource_cnt px-4 sm:px-10 md:px-16  lg:px-32  py-16">
        <div className="text-center">
          <h1 className="text-[40px] uppercase font-bold ">RESOURCES</h1>
          <p className="text-base capitalize text-[#777777] font-semibold my-2 ">
            Marketing & Brand Material
          </p>
        </div>
        <p className="text-[#777777] font-normal">
          AA Sourcing Ltd, your trusted business partner, provides comprehensive
          resources to help you effectively market and sell our apparel to your
          customers. Our toolkit includes high-resolution product images,
          user-friendly web tools, and physical materials such as printed
          cookbooks, color cards, size charts, print and embroidery guides, coat
          hangers, and detailed product sheets.
        </p>
        <p className="text-[#777777] font-normal  mt-6">
          Whether building a digital catalog or enhancing your in-store
          presentation, these assets are crafted to support your sales efforts
          and strengthen your brand presence. Explore everything we offer and
          discover how partnering with AA Sourcing Ltd can drive growth, boost
          efficiency, and elevate your business to new heights.
        </p>
      </div>

           <div className="resource_cards px-4 sm:px-10 md:px-16  lg:px-32 pt-8 pb-16">
                    <ResourceCard></ResourceCard>
           </div>
    </div>

        
  );
};

export default Resource;
