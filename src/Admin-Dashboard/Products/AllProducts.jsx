import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import AllProductsList from "./AllProductsList";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  


  return (
    <main className="p-4  md:w-[70%] mx-auto">
      {/* title */}
      <div className="title capitalize text-[30px] font-semibold my-4 ">
        <h1>All Products</h1>
      </div>

      {/* search and filter section */}
      <section className="w-full  flex justify-between gap-4">
        {/* search */}
        <div className="flex items-center w-full sm:w-1/2 md:w-[60%] lg:w-[70%] border border-gray-300 rounded-lg px-4 ">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            // value={searchTerm}
            // onChange={handleSearch}
            placeholder="Search products..."
            className="w-full outline-none text-gray-700 "
          />
        </div>

        {/*  Filter */}
        <div className="flex items-center w-full sm:w-1/2 md:w-[40%] lg:w-[30%] gap-2">

          <select
            // value={selectedCategory}
            // onChange={handleCategoryChange}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none"
          >
            <option value='t_shirt'> T-Shirt</option>
            <option value='t_shirt'> T-Shirt</option>
            <option value='t_shirt'> T-Shirt</option>
            <option value='t_shirt'> T-Shirt</option>
          </select>
        </div>
      </section>

      {/* all product list */}
         <section className="all_product_list">
                    {
                      allProducts.map((product) => <AllProductsList key={product.id} product={product}></AllProductsList>)
                    }
         </section>
    </main>
  );
};

export default AllProducts;
