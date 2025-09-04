import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import LogIn from './Authentication/LogIn.jsx';
import Register from './Authentication/Register.jsx';
import ProductCompare from './ProductCompare/ProductCompare.jsx';
import Colours from './colours/Colours.jsx';
import Blog from './Blog/Blog.jsx';
import Resource from './Resource/Resource.jsx';
import AddProducts from './Admin-Dashboard/Products/AddProducts.jsx';
// import ProductManagement from './Admin-Dashboard/Product Management/ProductManagement.jsx';
import AllProducts from './Admin-Dashboard/Products/AllProducts.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductBrand from './Admin-Dashboard/Product Management/ProductBrand.jsx';

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path : '/product-details',
    element : <ProductDetails></ProductDetails>
  },
  {
    path : 'log-in',
    element : <LogIn></LogIn>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/product-compare',
    element : <ProductCompare></ProductCompare>
  },
  {
    path : 'colours',
    element : <Colours></Colours>
  },
  {
     path : 'blog',
     element : <Blog></Blog>
  },
  {
    path : 'resource',
    element : <Resource></Resource>
  },
  {
    path : 'admin/all-products',
    element : <AllProducts></AllProducts>
  },
  {
    path : 'admin/add-products',
    element : <AddProducts></AddProducts>
  },
  {
    path : 'admin/product-management',
    element : <ProductBrand></ProductBrand>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <QueryClientProvider client={queryClient}>
        {/* react router dom */}


       <RouterProvider router={router} />


        {/* <Toaster></Toaster> */}
      </QueryClientProvider>

  </StrictMode>,
)
