// import classes from "./ui.module.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import React from "react";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Ui = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default Ui;
