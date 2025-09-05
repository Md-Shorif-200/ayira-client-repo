import React from 'react';
import CommonBanner from '../Components/CommonBanner';
import { useParams } from 'react-router-dom';
import useAllProducts from '../Hooks/useAllProducts';

const ProductDetails = () => {
     const {id} = useParams();
    const {products} = useAllProducts();

     
    const myProduct = products.find((product) => Number(product.id) === Number(id))
    console.log(myProduct);
    
    
     
  return (
    <main>

              {/* product image galary and product details section */}
          <section className='w-full grid grid-cols-2'>
              <div className="image_galary">
                    
              </div>

                <div className="Product_details">
                   
                </div>
          </section>
        
      
    </main>
  );
};

export default ProductDetails;