import { AiFillStar } from "react-icons/ai";
import classes from "./Flashsale.module.css";
import CartCtx from "../../../store/Cartctx";
import { useContext, useState } from "react";

const Flash = (props) => {
  const Cartctx = useContext(CartCtx);
  const addToCart = () => {
    Cartctx.addItems({
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
    <div className={classes.flashcontainer}>
      <div>
        <h5>{props.percentOff}</h5>
      </div>

      <div className={classes.image}>
        <img className={classes.productImage} src={props.productImage} alt="" />
      </div>
      <div className={classes.details}>
        <div className={classes.productDetail}>
          <h6>{props.product}</h6>
          <div className={classes.allstars}>
            {<AiFillStar color="#fde047" />}
            {<AiFillStar color="#fde047" />}
            {<AiFillStar color="#fde047" />}
            {<AiFillStar color="#fde047" />}
            {<AiFillStar color="#fde047" />}
          </div>

          <p className="price"> ${props.price}.00</p>
        </div>
        <button className="addcart" onClick={addToCart}>
          +
        </button>
      </div>
    </div>
  );
};

export default Flash;
