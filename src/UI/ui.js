import classes from "./ui.module.css";
import Header from "./Header";
import Body from "./Body";
import React from "react";

const Ui = () => {
  return (
    <React.Fragment className={classes.body}>
      <Header />
      <Body />
    </React.Fragment>
  );
};

export default Ui;
