import { Store } from "../Store";
import classes from "../Store.module.css";

const MenSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <h4>{Store.men.Fashion}</h4>
      <div className={classes.sec}>
        {Store.men.sections.map((eachSec) => {
          return <p className={classes.eachSec}>{eachSec}</p>;
        })}
      </div>
    </section>
  );
};

export default MenSidebar;
