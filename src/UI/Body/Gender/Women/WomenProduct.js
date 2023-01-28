// import { Store } from "../Store";
import classes from "../Store.module.css";
import { allRandomWomen } from "../Store";

const WomenProducts = () => {
  return (
    <section className={classes.products}>
      {allRandomWomen.map((random) => {
        return (
          <div className={classes.imageContainer}>
            <img className={classes.image} src={random[0]} alt="" />
            <h3>{random[1]}</h3>
            <h2>{random[2]}</h2>
            <div>
              <div></div>
              <p>({random[3]})</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WomenProducts;
