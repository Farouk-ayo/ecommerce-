import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import CartCtx from "../store/Cartctx";
import classes from "./Page.module.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartCtx = useContext(CartCtx);
  return (
    <section>
      <div className={classes.links}>
        <Link to="./cart">1. Cart</Link>
        <hr />
        <Link to="./details">2. Details</Link>
        <hr />
        <Link to="./payment">3. Payment</Link>
        <hr />
        <Link to="./review">4. Review</Link>
      </div>
      {cartCtx.items.map((item) => {
        return (
          <section className={classes.cartInfo}>
            <img src={item.productImage} alt="" />
            <div className={classes.eachInfo}>
              <div className={classes.details}>
                <h5>{item.productName}</h5>
                <p>
                  <span>${item.price}.00</span>x<span>{item.quantity}</span>
                </p>
                <h2>${item.totalAmount}.00</h2>
              </div>
              <div className={classes.btnDiv}>
                <button className={classes.firstBtn}>+</button>
                <p>{item.quantity}</p>
                <button className={classes.secondBtn}>-</button>
              </div>
            </div>
            <RxCross2 />
          </section>
        );
      })}
    </section>
  );
};

export default CartPage;
