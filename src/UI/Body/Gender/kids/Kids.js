import KidSidebar from "./KidSidebar";
import KidsProduct from "./KidsProducts";
import classes from "../Store.module.css";

const Kids = () => {
  return (
    <section className={classes.section} id="kids">
      <KidSidebar />
      <KidsProduct />
    </section>
  );
};

export default Kids;
