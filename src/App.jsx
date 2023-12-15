import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import SingleProduct from "./pages/single-product";
import About from "./pages/about";
import ProductsList from "./pages/product-list";
import Layout from "./components/layout/layout";
import Products from "./pages/product";
import DashboardLayout from "./components/layout/dashboard-layout";
import AllProducts from "./components/layout/dashboard-nav-content/all-products";
import CreateProduct from "./components/layout/dashboard-nav-content/create-product";
import UpdateProduct from "./components/layout/dashboard-nav-content/update-product";
import DeleteProduct from "./components/layout/dashboard-nav-content/delete-product";
import { useState } from "react";
import UserContext from "./components/context/UserContext";

function App() {

  const [pseudo, setPseudo] = useState(null);
  const handleLoginSubmit = (useName) => {
    setPseudo(useName)
  };

  return (
    <UserContext.Provider value={{ isLogged: true, pseudo: pseudo }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login onLoginSubmit={handleLoginSubmit} />} />
          <Routes path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Routes path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
              <Route path=":id" element={<SingleProduct />} />
            </Routes>
          </Routes>

          <Routes path="/" element={<DashboardLayout />}>
            <Route path="all-products" element={<AllProducts />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="update-product" element={<UpdateProduct />} />
            <Route path="delete-product" element={<DeleteProduct />} />
          </Routes>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
