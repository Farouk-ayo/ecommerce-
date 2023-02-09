import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import CartProvider from "../store/CartProvider";

const Root = () => {
  return (
    <CartProvider>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export default Root;
