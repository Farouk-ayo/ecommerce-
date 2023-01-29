// import { Store } from "../Store";
import classes from "../Store.module.css";
import { allRandomWomen } from "../Store";
import { AiFillStar } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
// import { MdFavorite } from "react-icons/md";

const WomenProducts = () => {
  return (
    <section className={classes.products}>
      {allRandomWomen.map((random) => {
        return (
          <div className={classes.imageContainer}>
            <img className={classes.image} src={random[0]} alt="" />
            <div className={classes.detailCon}>
              <div className={classes.titleCon}>
                <div className={classes.title}>
                  <h3>{random[1]}</h3> <p>({random[3]})</p>
                </div>
                <div className={classes.stars}>
                  {<AiFillStar color="#fde047" />}
                  {<AiFillStar color="#fde047" />}
                  {<AiFillStar color="#fde047" />}
                  {<AiFillStar color="#fde047" />}
                  {<AiFillStar color="#fde047" />}
                </div>
                <p className="price">{random[2]}</p>
              </div>
              <button className="addcart">+</button>
            </div>

            <MdFavoriteBorder
              color="#143f6b"
              size={20}
              className={classes.favourite}
            />
          </div>
        );
      })}
      <div className={classes.viewAll}>
        <p>View All</p>
        <BsPlayFill color="#808080" />
      </div>
    </section>
  );
};

export default WomenProducts;
