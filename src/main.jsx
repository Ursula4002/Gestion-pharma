import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './pages/single-product'
import About from './pages/about'
import ProductsList from './pages/product-list'
import Layout from './components/layout/layout'
import Products from './pages/product'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ProductsList />,
          },
          {
            path: ":id",
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
