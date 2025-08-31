import React, { useState } from "react";
import shop_banner_img from "../public/showing-cart-trolley-shopping-online-sign-graphic.jpg";
import { FaHome, FaListUl } from "react-icons/fa";
import CategoryFilter from "./CategoryFilter";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import BrandCheckbox from "./BrandCheckbox";
import PriceRangeSlider from "./PriceRangeSlider";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import TagsSection from "./TagSection";
import ProductList from "./ProductList";
import SingleProductSweper from "./SingleProductSweper";

const Shop = () => {

   const [viewType, setViewType] = useState("grid"); 


  return (
    <section className="products_shop  ">
      {/* shop banner */}
      <div
        className="shop_banner w-full h-[300px] bg-black/30 flex justify-center items-center"
        style={{
          backgroundImage: `url(${shop_banner_img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="shop_heading ">
          <h1 className="text-[38px] font-semibold text-white capitalize">
            shop list
          </h1>
          <p className="text-[14px] text-white capitalize flex items-center gap-2">
            {" "}
            <FaHome></FaHome> home / <span className="primary_text">shop</span>{" "}
          </p>
        </div>
      </div>

      {/* products listing page */}
      <div className="product-listing-page my-12 xl:flex gap-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/*---------------- sidebar-filters */}
        <div className="sidebar-filters w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:block  gap-6 xl:gap-0 xl:w-[25%] ">
          <CategoryFilter></CategoryFilter>
            <BrandCheckbox></BrandCheckbox>
             <PriceRangeSlider></PriceRangeSlider>
              <ColorFilter></ColorFilter>
                  <div className="col-span-2 md:col-span-1">
                        <SizeFilter ></SizeFilter>
                  </div>
              <TagsSection></TagsSection>
              <div className="hidden xl:block">
                 <SingleProductSweper></SingleProductSweper>
              </div>
             
        </div>

        {/* --------------- product-listing-content */}
        <div className="product-listing-content w-full xl:w-[73%] ">
          {/* view and sort  */}
          <div className="sm:flex justify-between my-8 sm:my-0">
                    {/* view button */}
            <div className="view_buton  flex items-center gap-2 mb-4 sm:mb-0">
              <p className="uppercase font-semibold ">views : </p>

  {/* grid view icon */}
              <button
                className={`grid_icon text-lg cursor-pointer ${
                  viewType === "grid" ? "primary_text" : "text-gray-500"
                }`}
                onClick={() => setViewType("grid")}
              >
                <BsFillGrid3X3GapFill />
              </button>

              {/* list view icon */}
              <button
                className={`flex_icon text-lg cursor-pointer ${
                  viewType === "list" ? "primary_text" : "text-gray-500"
                }`}
                onClick={() => setViewType("list")}
              >
                <FaListUl />
              </button>



            </div>
                    {/* sort by price */}
            <div className="sort_products  flex items-center gap-2">
              <p className="uppercase font-semibold whitespace-nowrap">sort by : </p>

              <select defaultValue="Pick a color " className="select">
                <option disabled={true}>Pick a color</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
              </select>
            </div>
          </div>

            {/* -----product list */}
              <div className="product_list">
                 <ProductList viewType={viewType}></ProductList>
              </div>

              {/* ------ */}
              <div class="text-block-container max-w-4xl mx-auto px-4 py-8 text-gray-700">
  <div class="paragraph-section mb-8">
    <p>
      Phasellus placerat orci tincidunt dui facilisis vehicula. <span class="font-bold">Etiam lobortis venenatis odio a pulvinar.</span> Donec laoreet vulputate eros, nec scelerisque tortor rutrum non. Morbi dapibus massa id sem dignissim, vel aliquam nunc vulputate. Etiam imperdiet arcu scelerisque nulla egestas posuere. Cras quis congue felis. Quisque dictum auctor nulla, sed tempor tortor aliquet vitae. Sed congue hendrerit ex nec laoreet. <span class="highlight-text bg-black text-white px-2 py-1 font-bold">Nullam quis iaculis ex, in ullamcorper quam.</span> Sed et ullamcorper magna, tempus posuere justo. Vestibulum luctus sagittis ante id malesuada. Vestibulum pretium convallis porttitor.
    </p>
  </div>
  
  <div class="paragraph-section">
    <p>
      Cras volutpat purus placerat tellus molestie pulvinar. <span class="font-bold">Nulla nunc orci, dapibus sit amet massa quis, semper ultrices augue. Praesent posuere aliquam nibh, eget blandit augue tincidunt vel.</span> Sed luctus facilisis posuere. Phasellus velit est, vulputate vel eleifend in, malesuada quis odio.
    </p>
  </div>
</div>


        </div>
      </div>



    </section>
  );
};

export default Shop;
