import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import CartCtx from "../store/Cartctx";
import classes from "./Page.module.css";
import Form from "../components/Form";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const cartCtx = useContext(CartCtx);
  const number = cartCtx.items.length;

  const addToCart = (item) => {
    cartCtx.addItems({ ...item, quantity: 1, totalPrice: item.price });
    console.log(item);
  };
  const removeCart = (id) => {
    cartCtx.removeItems(id);
  };

  const clearCart = (id) => {
    cartCtx.clearItems(id);
  };

  return (
    <section className={classes.CartPage}>
      <div className={classes.links}>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          1. Cart
        </NavLink>
        <hr />
        <NavLink
          to="/cart/checkout"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          2. Details
        </NavLink>
        <hr />
        <NavLink
          to="/cart/payment"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          3. Payment
        </NavLink>
        <hr />
        <NavLink
          to="/cart/review"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          4. Review
        </NavLink>
      </div>
      <section className={classes.cart}>
        {number ? (
          <div className={classes.carts}>
            {cartCtx.items.map((item) => {
              return (
                <section className={classes.cartInfo}>
                  <div>
                    <img src={item.productImage} alt="" />
                    <div className={classes.eachInfo}>
                      <div className={classes.details}>
                        <h5>{item.productName}</h5>
                        <span>
                          <p>
                            <span>${item.price}.00</span>x
                            <span>{item.quantity}</span>
                          </p>
                          <h2>${item.totalPrice}.00</h2>
                        </span>
                      </div>
                      <div className={classes.btnDiv}>
                        <button
                          className={classes.secondBtn}
                          onClick={removeCart.bind(null, item.id)}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className={classes.firstBtn}
                          onClick={addToCart.bind(null, item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <RxCross2
                    size={40}
                    className="RxCross2"
                    onClick={clearCart.bind(null, item.id)}
                  />
                </section>
              );
            })}
          </div>
        ) : (
          <section className={classes.null}>
            <h1>Nothing dey here brother, try add something nigga😌😌</h1>
          </section>
        )}

        <section className={classes.totalAmount}>
          <h3>
            <span>Total:</span>
            <span>${cartCtx.totalAmount}</span>
          </h3>
          <hr />
          <form
            action="
            "
          >
            <label htmlFor="comment">
              Additional Comments <span>Note</span>
            </label>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
            ></textarea>
            <hr />
            <Form />
          </form>
        </section>
      </section>
    </section>
  );
};

export default CartPage;
