import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const ProductList = ({viewType}) => {
  const [products, setProducts] = useState([]);




  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 12;

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const offset = currentPage * cardsPerPage;
  const currentPageProducts = products.slice(offset, offset + cardsPerPage);
  const pageCount = Math.ceil(products.length / cardsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };



  return (
    <div className="container mx-auto py-6">
      {/* Product Grid */}
      <div className={`grid  gap-10  ${viewType === 'grid' ? " grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1"}  `}>
        {currentPageProducts.map((product) => (
          <ProductCard key={product.id} product={product} viewType={viewType} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center">
        <ReactPaginate
          previousLabel={<FaArrowLeft className="text-xl text-[#ffbb42]" />}
          nextLabel={<FaArrowRight className="text-xl text-[#ffbb42]" />}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          forcePage={currentPage}  // keeps the UI synced with state
          containerClassName="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-md"
          pageLinkClassName="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200 transition"
          activeLinkClassName="bg-[#ffbb42] text-white border-[#ffbb42] font-semibold"
          previousClassName="cursor-pointer"
          nextClassName="cursor-pointer"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default ProductList;
