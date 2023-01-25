import classes from "../Store.module.css";
import { Store } from "../Store";

const KidSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <h4>{Store.kids.Fashion}</h4>
      {Store.kids.sections.map((eachSec) => {
        return <p>{eachSec}</p>;
      })}
    </section>
  );
};

export default KidSidebar;
