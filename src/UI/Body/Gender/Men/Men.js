import MenProducts from "./MenProduct";
import MenSidebar from "./MenSidebar";
import classes from "../Store.module.css";

const Men = (props) => {
  return (
    <section className={classes.section} id="men">
      <MenSidebar key={props.key} />
      <MenProducts key={props.key} />
    </section>
  );
};

export default Men;
