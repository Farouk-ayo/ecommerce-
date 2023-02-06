import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";

const Root = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Root;
