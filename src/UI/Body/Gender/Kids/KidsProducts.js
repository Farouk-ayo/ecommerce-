import { allRandomKids } from "../Store";
import classes from "../Store.module.css";
import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import EachKid from "./EachKid";
// import { MdFavorite } from "react-icons/md";

const KidsProducts = () => {
  return (
    <section className={classes.products}>
      {allRandomKids.map((random) => {
        return (
          <EachKid
            id={random[4]}
            productName={random[1]}
            productImage={random[0]}
            percentOff={0}
            price={random[2]}
            quantity={random[3]}
            totalPrice={random[2] * 1}
          />
        );
      })}

      <Link to="/kids" className={classes.viewAll}>
        View All
        <BsPlayFill color="#808080" />
      </Link>
    </section>
  );
};
export default KidsProducts;
