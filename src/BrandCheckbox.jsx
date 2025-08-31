import React, { useState } from "react";

// Brand Data
const initialBrands = [
  "American Eagle Outfitters",
  "Banana Republic",
  "Coach",
  "Gap",
  "Nike",
  "Old Navy",
  "Victoria's Secret",
];

const extraBrands = [
  "Amante",
  "Blackberrys",
  "Bella Moda",
  "Chemistry",
  "Chkokko",
  "DailyObjects",
  "Dermacol",
  "Amante",
  "Blackberrys",
  "Bella Moda",
  "Chemistry",
  "Chkokko",
  "DailyObjects",
  "Dermacol",
  "Amante",
  "Blackberrys",
  "Bella Moda",
  "Chemistry",
  "Chkokko",
  "DailyObjects",
  "Dermacol",
  "Amante",
  "Blackberrys",
  "Bella Moda",
  "Chemistry",
  "Chkokko",
  "DailyObjects",
];

const BrandCheckbox = ({ onSelect }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const handleCheckboxChange = (brand) => {
    let updatedBrands;
    if (selectedBrands.includes(brand)) {
      updatedBrands = selectedBrands.filter((b) => b !== brand);
    } else {
      updatedBrands = [...selectedBrands, brand];
    }
    setSelectedBrands(updatedBrands);
    if (onSelect) onSelect(updatedBrands);
  };

  return (
    <div className="w-full bg-white px-4  font-sans text-gray-800 mb-4 ">
      {/* Title */}
      <h3 className="text-sm font-bold tracking-wide uppercase">
        Filter by Brands
      </h3>
      <div className="mt-2 mb-4 relative">
        <div className="absolute top-0 w-full h-0.5 bg-gray-100"></div>
        <div className="absolute top-0 w-12 h-0.5 bg-yellow-400 rounded"></div>
      </div>

      {/* Checkbox List */}
      <div className="space-y-2">
        {/* Initial Brands */}
        {initialBrands.map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-yellow-600"
          >
            <input
              type="checkbox"
              className="accent-yellow-500"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleCheckboxChange(brand)}
            />
            {brand}
          </label>
        ))}

        {/* Toggle Button in between */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-yellow-600 text-sm font-semibold hover:underline mt-2"
        >
          {showMore ? "Less" : "+ 27 More"}
        </button>

        {/* Extra Brands with animation */}
        <div
          className={`transition-all duration-500 ease-in-out`}
          style={{
            maxHeight: showMore ? "400px" : "0px",
            overflow: "hidden",
            opacity: showMore ? 1 : 0,
          }}
        >
          <div className="mt-2 space-y-2">
            {extraBrands.map((brand, index) => (
              <label
                key={`${brand}-${index}`}
                className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-yellow-600"
              >
                <input
                  type="checkbox"
                  className="accent-yellow-500"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleCheckboxChange(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCheckbox;
