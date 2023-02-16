import { RxCross2 } from "react-icons/rx";
import classes from "./CartInfo.module.css";

const CartInfo = (props) => {
  return (
    <section className={classes.cartInfo}>
      <div className={classes.eachInfo}>
        <div className={classes.btnDiv}>
          <button className={classes.firstBtn}>+</button>
          <p>{props.quantity}</p>
          <button className={classes.secondBtn}>-</button>
        </div>
        <img src={props.productImage} alt="" />
        <div className={classes.details}>
          <h5>{props.productName}</h5>
          <p>
            <span>${props.price}.00</span>x<span>{props.quantity}</span>
          </p>
          <h2>${props.totalAmount}.00</h2>
        </div>
        <RxCross2 className="RxCross2" />
      </div>
      <hr />
    </section>
  );
};

export default CartInfo;
