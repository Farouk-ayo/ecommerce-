// import classes from "./ui.module.css";
import Header from "./Mainpage/Header";
import Body from "./Body/Body";
import React from "react";
import Main from "./Mainpage/Main";

const Ui = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Body />
    </React.Fragment>
  );
};

export default Ui;
