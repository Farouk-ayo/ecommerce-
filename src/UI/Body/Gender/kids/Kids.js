import KidSidebar from "./KidSidebar";
import KidsProduct from "./KidsProducts";
import classes from "../Store.module.css";

const Kids = (props) => {
  return (
    <section className={classes.section} id="kids">
      <KidSidebar key={props.key} />
      <KidsProduct key={props.key}/>
    </section>
  );
};

export default Kids;
