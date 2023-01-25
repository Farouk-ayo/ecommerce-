import { Store } from "../Store";
import classes from "../Store.module.css";

const WomenSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <h4>{Store.women.Fashion}</h4>
      {Store.women.sections.map((eachSec) => {
        return <p>{eachSec}</p>;
      })}
    </section>
  );
};
export default WomenSidebar;
