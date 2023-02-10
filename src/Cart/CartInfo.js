import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import classes from "./CartInfo.module.css";

const CartInfo = (props) => {
  return (
    <section className={classes.cartInfo}>
      <div className={classes.eachInfo}>
        <div>
          <button className={classes.firstBtn}>+</button>
          <p>{props.quantity}</p>
          <button className={classes.secondBtn}>-</button>
        </div>
        <img src={props.productImage} alt="" />
        <div>
          <h5>{props.product}</h5>
          <p>
            <span>${props.price}</span>
            <span>{props.quantity}</span>
          </p>
          <h2>{props.totalAmount}</h2>
        </div>
        <RxCross2 />
      </div>
      <hr />
    </section>
  );
};

export default CartInfo;
