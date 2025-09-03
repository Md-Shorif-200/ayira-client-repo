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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

       <RouterProvider router={router} />
  </StrictMode>,
)
