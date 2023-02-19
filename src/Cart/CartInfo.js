import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CartCtx from "../store/Cartctx";
import classes from "./CartInfo.module.css";

const CartInfo = (props) => {
  const Cartctx = useContext(CartCtx);
  let numb = props.quantity;

  const [numbers, setNumber] = useState(numb);
  // console.log(props.quantity);
  // console.log(Cartctx.items);

  const addToCart = () => {
    if (numbers < 5) {
      setNumber(numbers + 1);
    }
    Cartctx.addItems({
      id: props.id,
      productName: props.productName,
      productImage: props.productImage,
      percentOff: props.percentOff,
      price: props.price,
      quantity: numbers,
      totalPrice: props.price * numbers,
    });
  };
  const removeCart = () => {
    if (numbers >= 1) {
      setNumber(numbers - 1);
    }

    Cartctx.removeItems(props.id);
  };

  return (
    <section className={classes.cartInfo}>
      <div className={classes.eachInfo}>
        <div className={classes.btnDiv}>
          <button className={classes.firstBtn} onClick={addToCart}>
            +
          </button>
          <p>{props.quantity}</p>
          <button className={classes.secondBtn} onClick={removeCart}>
            -
          </button>
        </div>
        <img src={props.productImage} alt="" />
        <div className={classes.details}>
          <h5>{props.productName}</h5>
          <p>
            <span>${props.price}.00</span>x<span>{props.quantity}</span>
          </p>
          <h2>${props.totalPrice}.00</h2>
        </div>
        <RxCross2 className="RxCross2" onClick={removeCart} />
      </div>
      <hr />
    </section>
  );
};

export default CartInfo;
