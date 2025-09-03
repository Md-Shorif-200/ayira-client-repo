import React from 'react';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { MdEdit, MdOutlineInfo } from 'react-icons/md';

const AllProductsList = ({ product }) => {
  const { colors, reviews, rating, price, title, image } = product;

  return (
    <div className="flex items-center justify-between p-2 my-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Left: Image & Info */}
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={title}
          className="w-14 h-14 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">Price: ${price}</p>
          {/* 
          <p className="text-xs text-gray-500">
            Rating: {rating} ({reviews} reviews)
          </p> */}
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center ">
  

        {/* Edit Icon Button */}
        <button
          className="p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
          onClick={() => alert(`Editing ${title}`)}
          title="Edit"
        >
          <MdEdit className="text-xl" />
        </button>

        {/* Delete Icon Button */}
        <button
          className="p-2 text-gray-500 rounded-full hover:bg-red-100 hover:text-red-700 focus:outline-none"
          onClick={() => alert(`Deleting ${title}`)}
          title="Delete"
        >
          <FaTrashAlt className="text-lg" />
        </button>

           {/* see details Icon Button */}
        <button
          className="p-2 text-gray-500 rounded-full hover:bg-red-100 hover:text-red-700 focus:outline-none"
          onClick={() => alert(`Deleting ${title}`)}
          title="Delete"
        >
          <FaEye className="text-lg" />
        </button>




      </div>
    </div>
  );
};

export default AllProductsList;
