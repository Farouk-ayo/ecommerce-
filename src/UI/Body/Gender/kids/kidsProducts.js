import { allRandomKids } from "../Store";
import classes from "../Store.module.css";

const KidsProduct = () => {
  return (
    <section className={classes.products}>
      {allRandomKids.map((random) => {
        return (
          <div className={classes.imageContainer}>
            {/* <img className={classes.image} src={random[0]} alt="" />
            <h3>{random[1]}</h3>
            <h2>{random[2]}</h2>
            <div>
              <div></div>
              <p>({random[3]})</p> */}
          </div>
        );
      })}
    </section>
  );
};
export default KidsProduct;
