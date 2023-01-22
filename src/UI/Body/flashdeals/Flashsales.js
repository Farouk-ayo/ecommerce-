import { IoFlash } from "react-icons/io5";
import classes from "./Flashsale.module.css";

const Flashsale = () => {
  return (
    <section className={classes.flashsale}>
      <div className={classes.flashHead}>
        <IoFlash color="#f55353" size={30} />
        <h2>Flash Sales</h2>
      </div>
      <div className={classes.flashcontainer}></div>
    </section>
  );
};

export default Flashsale;
