import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from './ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path : '/product-details',
    element : <ProductDetails></ProductDetails>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

       <RouterProvider router={router} />
  </StrictMode>,
)
