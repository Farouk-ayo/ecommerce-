import { AiFillStar } from "react-icons/ai";
import classes from "./Flashsale.module.css";
import CartCtx from "../../../store/Cartctx";
import { useContext } from "react";

const Flash = (props) => {
  const Cartctx = useContext(CartCtx);
  const addToCart = () => {
    // console.log(props.id);
    Cartctx.addItems({
      id: props.id,
      productName: props.productName,
      productImage: props.productImage,
      percentOff: props.percentOff,
      price: props.price,
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

          <p className="price"> {props.price}</p>
        </div>
        <button className="addcart" onClick={addToCart}>
          +
        </button>
      </div>
    </div>
  );
};

export default Flash;
