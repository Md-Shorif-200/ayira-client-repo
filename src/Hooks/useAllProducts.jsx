// src/hooks/useAllProducts.js
import { useState, useEffect } from "react";

const useAllProducts = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);

      })
      .catch((err) => {
console.log(err);


      });
  }, []);

  return { products};
};

export default useAllProducts;
