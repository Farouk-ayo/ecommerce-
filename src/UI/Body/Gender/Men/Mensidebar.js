import { useState } from "react";
import { Store } from "../Store";
import classes from "../Store.module.css";

const MenSidebar = () => {
const [filter , setFilter]=useState()

const fashionFilter=(e)=>{
  setFilter(!filter)
  console.log(e.target.value)
}

  return (
    <section className={classes.sidebar}>
      <div className={classes.fasCon}>
        <h4>{Store.men.Fashion}</h4>
        <p className={classes.fashion}>/Fashion</p>
      </div>
      <div className={classes.sec}>
        {Store.men.sections.map((eachSec) => {
          return <p onClick={fashionFilter} className={classes.eachSec}>{eachSec}</p>;
        })}
      </div>
    </section>
  );
};

export default MenSidebar;
