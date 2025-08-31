import React, { useState } from "react";

// Category Data
const filterData = [
  {
    name: "Men",
    subcategories: ["Skirts", "Leggings", "Jeans", "Pants & Capris", "Shorts"],
  },
  {
    name: "Women",
    subcategories: ["Dresses", "Tops", "Skirts", "Jeans", "Jackets"],
  },
  {
    name: "Boys",
    subcategories: ["T-Shirts", "Shorts", "Jeans", "Hoodies"],
  },
  {
    name: "Girls",
    subcategories: ["Dresses", "Tops", "Leggings", "Skirts"],
  },
  {
    name: "Kids",
    subcategories: ["Toys", "Clothing", "Shoes", "Accessories"],
  },
];

// Chevron Icon
const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const CategoryFilter = ({ onSelect }) => {
  const [openCategory, setOpenCategory] = useState("Men");
  const [subcategory,setSubcategory] = useState(null)
  console.log(subcategory);
  


  const handleToggle = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

const handleSubSelect = (sub) => {
  setSubcategory(sub);  // update selected subcategory
  if (onSelect) {
    onSelect(sub);      // pass value to parent if callback exists
  }
};
  return (
    <div className=" w-full bg-white  px-4 font-sans text-gray-800 mb-4">
      {/* Title */}
      <h3 className="text-sm font-bold tracking-wide uppercase">
        Filters by Categories
      </h3>
      <div className="mt-2 mb-4 relative">
          <div className=" absolute top-0  w-full h-0.5 bg-gray-100"></div>
          <div className=" absolute top-0   w-12 h-0.5 bg-yellow-400 rounded"></div>
      </div>

      {/* Category List */}
      <div>
        {filterData.map((category) => {
          const isOpen = openCategory === category.name;
          return (
            <div
              key={category.name}
              className=""
            >
              {/* Category Header */}
              <button
                onClick={() => handleToggle(category.name)}
                className="flex justify-between items-center w-full py-3 text-left font-semibold hover:text-yellow-600 transition-colors"
              >
                <span>{category.name}</span>
                <ChevronIcon isOpen={isOpen} />
              </button>

              {/* Smooth Collapsible Section */}
              <div
                className={`transition-all duration-500 ease-in-out`}
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  overflow: "hidden",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <ul className=" py-2 space-y-2 border-l">
                  {category.subcategories.map((sub) => (
                    <li
                      key={sub}
                      className="cursor-pointer relative pl-4 text-gray-600 hover:text-[#ffbb42] transition-colors"
                      onClick={() => handleSubSelect(sub)}
                    >
                      <div className="absolute left-0 top-1/2 w-2 h-px bg-black transform -translate-y-1/2"></div>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;


