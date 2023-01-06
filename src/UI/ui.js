import classes from "./ui.module.css";
import Header from "./Header";
import Body from "./Body";
import React from "react";
import Main from "./Main";

const Ui = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Main />
    </React.Fragment>
  );
};

export default Ui;
