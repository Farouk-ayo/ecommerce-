import classes from "../Store.module.css";
import { Store } from "../Store";

const KidSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <div className={classes.fasCon}>
        <h4>{Store.kids.Fashion}</h4>
        <p className={classes.fashion}>/Fashion</p>
      </div>
      <div className={classes.sec}>
        {Store.kids.sections.map((eachSec) => {
          return <p className={classes.eachSec}>{eachSec}</p>;
        })}
      </div>
    </section>
  );
};

export default KidSidebar;
