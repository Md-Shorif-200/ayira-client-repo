import React from 'react';

const SizeFilter = () => {


  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="p-4 bg-white ">
  

      {/* Filter By Size Section */}
      <div>
        {/* Title */}
      <div className="mb-10">
        <h3 className="text-sm font-bold tracking-wide uppercase">
          filter by size
        </h3>
        <div className="mt-2 mb-4 relative">
          <div className=" absolute top-0  w-full h-0.5 bg-gray-100"></div>
          <div className=" absolute top-0   w-12 h-0.5 bg-yellow-400 rounded"></div>
        </div>
      </div>

        <div className="flex flex-wrap gap-2">
          {sizes.map((size, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-8 h-8 rounded-full border cursor-pointer  text-sm
                          ${size === 'S' ? 'bg-yellow-500 text-white font-bold border-yellow-500' : 'bg-gray-200 text-gray-800 border-gray-300'}`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SizeFilter;