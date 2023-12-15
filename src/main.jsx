// import './App.css'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import Login from './pages/login'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home'
// import SingleProduct from './pages/single-product'
// import About from './pages/about'
// import ProductsList from './pages/product-list'
// import Layout from './components/layout/layout'
// import Products from './pages/product'
// import DashboardLayout from './components/layout/dashboard-layout'
// import AllProducts from './components/layout/dashboard-nav-content/all-products'
// import CreateProduct from './components/layout/dashboard-nav-content/create-product'
// import UpdateProduct from './components/layout/dashboard-nav-content/update-product'
// import DeleteProduct from './components/layout/dashboard-nav-content/delete-product'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/products",
//         element: <Products />,
//         children: [
//           {
//             path: "",
//             element: <ProductsList />,
//           },
//           {
//             path: ":id",
//             element: <SingleProduct />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <DashboardLayout />,
//     children: [
//       {
//         path: "/all-products",
//         element: <AllProducts />,
//       },

//       {
//         path: "/create-product",
//         element: <CreateProduct />,
//       },

//       {
//         path: "/update-product",
//         element: <UpdateProduct />,
//       },

//       {
//         path: "/delete-product",
//         element: <DeleteProduct />,
//       },

//       {
//         path: "/",
//         element: <DeleteProduct />,
//       },

//     ]
//   }
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


// New config using context
import React from "react";
import { ReactDOM } from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)