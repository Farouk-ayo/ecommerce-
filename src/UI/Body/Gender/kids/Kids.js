import KidSidebar from "./KidSidebar";
import KidsProduct from "./KidsProducts";
import classes from "./KidsProduct.module.css";

const Kids = () => {
  return (
    <section className={classes.sec}>
      <KidSidebar />
      <KidsProduct />
    </section>
  );
};

export default Kids;
