import { allRandomKids } from "../Store";
import classes from "../Store.module.css";
import { AiFillStar } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { useState } from "react";
// import { MdFavorite } from "react-icons/md";

const KidsProduct = () => {
  const [favorite, setFavorite] = useState(true);
  const changeFavorite = () => {
    setFavorite(false);
  };

  return (
    <section className={classes.products}>
      {allRandomKids.map((random) => {
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

            {favorite ? (
              <MdFavoriteBorder
                color="#143f6b"
                size={20}
                className={classes.favourite}
                onClick={changeFavorite}
              />
            ) : (
              <MdFavorite
                color="#143f6b"
                size={20}
                className={classes.favourite}onClick={changeFavorite}
              />
            )}
          </div>
        );
      })}

      <Link to="/kids" className={classes.viewAll}>
        View All
        <BsPlayFill color="#808080" />
      </Link>
    </section>
  );
};
export default KidsProduct;
