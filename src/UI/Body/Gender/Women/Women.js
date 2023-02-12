import WomenProducts from "./WomenProduct";
import WomenSidebar from "./WomenSidebar";
import classes from "../Store.module.css";

const Women = (props) => {
  return (
    <section className={classes.section} id="women">
      <WomenSidebar />
      <WomenProducts key={props.key} />
    </section>
  );
};

export default Women;
