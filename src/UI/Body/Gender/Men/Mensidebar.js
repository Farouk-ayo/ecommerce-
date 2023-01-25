import { Store } from "../Store";
import classes from "../Store.module.css";

const MenSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <h4>{Store.men.Fashion}</h4>
      {Store.men.sections.map((eachSec) => {
        return <p>{eachSec}</p>;
      })}
    </section>
  );
};

export default MenSidebar;
