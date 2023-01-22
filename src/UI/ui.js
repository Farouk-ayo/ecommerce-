// import classes from "./ui.module.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import React from "react";
import Main from "./Main/Main";

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
