import React, { useState } from 'react';
import { FaTrashAlt, FaEye } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import ProductEditModal from './ProductEditModal';

const AllProductsList = ({ product }) => {
  const { price, title, image } = product;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleEditClick = () => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleUpdate = (updatedData) => {
    console.log("Updated Product:", updatedData);
    // এখানে API call দিয়ে update করতে পারবেন
  };

  return (
    <>
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
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center">
          {/* Edit Icon Button */}
          <button
            className="p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            onClick={handleEditClick}
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

          {/* See details Icon Button */}
          <button
            className="p-2 text-gray-500 rounded-full hover:bg-blue-100 hover:text-blue-700 focus:outline-none"
            onClick={() => alert(`Viewing ${title}`)}
            title="View Details"
          >
            <FaEye className="text-lg" />
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      <ProductEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={currentProduct}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default AllProductsList;
