// import { Store } from "../Store";
import { allRandomMen } from "../Store";
import classes from "../Store.module.css";

const MenProducts = () => {
  return (
    <section className={classes.products}>
      {allRandomMen.map((random) => {
        return (
          <div className={classes.imageContainer}>
            <img className={classes.image} src={random} alt="" />
          </div>
        );
      })}
    </section>
  );
};

export default MenProducts;
