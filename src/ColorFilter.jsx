import React from "react";

const ColorFilter = () => {
  const colors = [
    "#007BFF",
    "#212529",
    "#ADB5BD",
    "#FFFFFF",
    "#6F42C1",
    "#FD7E14",
    "#D1ECF1",
    "#343A40",
    "#6C757D",
    "#17A2B8",
    "#28A745",
    "#6610F2",
    "#E83E8C",
    "#FFC107",
  ];

  return (
    //   {/* Choose By Color Section */}
    <div className=" p-4">
      {/* Title */}
      <div className="mb-10">
        <h3 className="text-sm font-bold tracking-wide uppercase">
          choose by color
        </h3>
        <div className="mt-2 mb-4 relative">
          <div className=" absolute top-0  w-full h-0.5 bg-gray-100"></div>
          <div className=" absolute top-0   w-12 h-0.5 bg-yellow-400 rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-1">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-10 h-8 border border-gray-300 cursor-pointer"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
