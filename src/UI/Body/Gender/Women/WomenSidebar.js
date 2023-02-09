import { Store } from "../Store";
import classes from "../Store.module.css";

const WomenSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <div className={classes.fasCon}>
        <h4>{Store.women.Fashion}</h4>
        <p className={classes.fashion}>/Fashion</p>
      </div>
      <div className={classes.sec}>
        {Store.women.sections.map((eachSec) => {
          return (
            <p key={eachSec.length} value={eachSec} className={classes.eachSec}>
              {eachSec}
            </p>
          );
        })}
      </div>
    </section>
  );
};
export default WomenSidebar;
