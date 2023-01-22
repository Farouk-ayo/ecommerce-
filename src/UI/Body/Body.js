import { Fragment } from "react";
import Catalogue from "./catalogue/Catalogue";
import Flashsale from "./flashdeals/Flashsales";

const Body = () => {
  return (
    <Fragment>
      <Catalogue />
      <Flashsale />
    </Fragment>
  );
};

export default Body;
