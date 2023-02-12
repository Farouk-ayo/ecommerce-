import MenProducts from "./MenProducts";
import MenSidebar from "./MenSidebar";
import classes from "../Store.module.css";

const Men = (props) => {
  return (
    <section className={classes.section} id="men">
      <MenSidebar />
      <MenProducts />
    </section>
  );
};

export default Men;
