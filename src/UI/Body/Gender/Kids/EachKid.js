import classes from "../Store.module.css";
import { AiFillStar } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useContext, useState } from "react";
import CartCtx from "../../../../store/Cartctx";

const EachKid = (props) => {
  const [favorite, setFavorite] = useState(true);
  const changeFavorite = () => {
    setFavorite(false);
  };
  const cartCtx = useContext(CartCtx);
  const addToCart = () => {
    cartCtx.addItems({
      id: props.id,
      productName: props.productName,
      productImage: props.productImage,
      percentOff: props.percentOff,
      price: props.price,
      quantity: 1,
      totalPrice: props.price * 1,
    });
  };

  return (
    <div className={classes.imageContainer} key={props.id}>
      <img className={classes.image} src={props.productImage} alt="" />
      <div className={classes.detailCon}>
        <div className={classes.titleCon}>
          <div className={classes.title}>
            <h3>{props.productName}</h3> <p>({props.quantity})</p>
          </div>
          <div className={classes.stars}>
            {<AiFillStar color="#fde047" />}
            {<AiFillStar color="#fde047" />}
            {<AiFillStar color="#fde047" />}
            {<AiFillStar color="#fde047" />}
            {<AiFillStar color="#fde047" />}
          </div>
          <p className="price">${props.price}.00</p>
        </div>
        <button className="addcart" onClick={addToCart}>
          +
        </button>
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
};

export default EachKid;
