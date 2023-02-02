import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Store } from "../UI/Body/Gender/Store";
import classes from "../UI/Body/Gender/Store.module.css";

const Womenpage = () => {
  const [favorite, setFavorite] = useState(true);
  const changeFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <section className={classes.productsPage}>
      {Store.women.Clothes.map((random) => {
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
                className={classes.favourite}
                onClick={changeFavorite}
              />
            )}
          </div>
        );
      })}{" "}
      {Store.women.Bags.map((random) => {
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
                className={classes.favourite}
                onClick={changeFavorite}
              />
            )}
          </div>
        );
      })}{" "}
      {Store.women.Shoes.map((random) => {
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
                className={classes.favourite}
                onClick={changeFavorite}
              />
            )}
          </div>
        );
      })}{" "}
      {Store.women.Jewelry.map((random) => {
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
                className={classes.favourite}
                onClick={changeFavorite}
              />
            )}
          </div>
        );
      })}{" "}
    </section>
  );
};

export default Womenpage;
