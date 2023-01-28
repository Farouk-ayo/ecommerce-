// import { Store } from "../Store";
import classes from "../Store.module.css";
import { allRandomWomen } from "../Store";

const WomenProducts = () => {
  return (
    <section className={classes.products}>
      {allRandomWomen.map((random) => {
        return (
          <div className={classes.imageContainer}>
            <img className={classes.image} src={random} alt="" />
          </div>
        );
      })}
    </section>
  );
};

export default WomenProducts;
