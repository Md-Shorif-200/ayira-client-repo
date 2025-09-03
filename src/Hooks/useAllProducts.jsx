// import React from 'react';

// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from './useAxiosSecure';

// const useAllProducts = () => {
//     const axiosSecure = useAxiosSecure();

//     const {data : allProducts = [],refetch,isLoading} = useQuery({
//                 queryKey : ['allProducts'],
//                 queryFn : async () => {
//                       const response = await axiosSecure.get('/allProducts');
//                       return response.data;
//                 }
//     })

//     return [allProducts,refetch,isLoading]
// };

// export default useAllProducts;


import React from 'react';

const useAllProducts = () => {
    return (
        <div>
            
        </div>
    );
};

export default useAllProducts;