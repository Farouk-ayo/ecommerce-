import { allRandomKids } from "../Store";
import classes from "../Store.module.css";

const KidsProduct = () => {
  return (
    <section className={classes.products}>
      {allRandomKids.map((random) => {
        return (
          <div className={classes.imageContainer}>
            <img className={classes.image} src={random} alt="" />
          </div>
        );
      })}
    </section>
  );
};
export default KidsProduct;
