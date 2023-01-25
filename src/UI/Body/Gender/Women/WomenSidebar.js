import { Store } from "../Store";
import classes from "../Store.module.css";

const WomenSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <h4>{Store.women.Fashion}</h4>
      <div className={classes.sec}>
        {Store.women.sections.map((eachSec) => {
          return <p className={classes.eachSec}>{eachSec}</p>;
        })}
      </div>
    </section>
  );
};
export default WomenSidebar;
