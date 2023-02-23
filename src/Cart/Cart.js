import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import CartCtx from "../store/Cartctx";
import CartInfo from "./CartInfo";
import { TiShoppingCart } from "react-icons/ti";
import classes from "./CartInfo.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartCtx);
  const number = cartCtx.items.length;

  return (
    <section className={classes.cart}>
      <header>
        <div className={classes.cartHead}>
          <div>
            <TiShoppingCart size={30} />
            <p>
              {" "}
              {cartCtx.items.length > 0
                ? `${cartCtx.items.length} items`
                : "no item"}
            </p>
          </div>
          <RxCross2
            size={40}
            className={classes.RxCross2}
            onClick={props.onClose}
          />
        </div>
        <hr />
        {number ? (
          <section>
            {cartCtx.items.map((item) => {
              return (
                <CartInfo
                  key={item.id}
                  id={item.id}
                  productName={item.productName}
                  productImage={item.productImage}
                  percentOff={item.percentOff}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                  totalAmount={cartCtx.totalAmount}
                />
              );
            })}
          </section>
        ) : (
          <section className={classes.null}>
            <h1>Nothing dey here brother, try add something nigga😌😌</h1>
          </section>
        )}
      </header>

      <footer>
        <Link to="/checkout" className={classes.checkout}>
          Checkout Now <span>(${cartCtx.totalAmount}.00)</span>
        </Link>

        <Link className={classes.viewCart} to="/cart" onClick={props.onClose}>
          View Cart
        </Link>
      </footer>
    </section>
  );
};

export default Cart;
