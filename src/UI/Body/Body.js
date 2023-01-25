import { Fragment } from "react";
import Catalogue from "./catalogue/Catalogue";
import Flashsale from "./flashdeals/Flashsales";
import Kids from "./Gender/kids/Kids";
import Men from "./Gender/Men/Men";
import Women from "./Gender/Women/Women";

const Body = () => {
  return (
    <Fragment>
      <Catalogue />
      <Flashsale />
      <Men />
      <Women />
      <Kids />
    </Fragment>
  );
};

export default Body;
