import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/home.index";
import AllProducts from "./pages/allProducts/AllProducts";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import SearchPage from "./pages/searchPage/SearchPage";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import useProductsStore from "./utility/Stores/AllProductsStore";
import { AnimatePresence } from "framer-motion";
import Authentication from "./pages/authentication/Authentication.index";
import LogIn from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";

const App = () => {
  const FetchAllProduct = useProductsStore((state) => state.fetchProducts);
  useEffect(() => {
    const fetchProduct = async () => {
      await FetchAllProduct();
    };

    fetchProduct();
  }, [FetchAllProduct]);

  function AnimatedRoutes() {
    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:index" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:input" element={<SearchPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default App;
