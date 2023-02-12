import KidSidebar from "./KidSidebar";
import KidsProduct from "./KidsProducts";
import classes from "../Store.module.css";

const Kids = (props) => {
  return (
    <section className={classes.section} id="kids">
      <KidSidebar />
      <KidsProduct key={props.key} />
    </section>
  );
};

export default Kids;
