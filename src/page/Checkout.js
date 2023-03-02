import { NavLink } from "react-router-dom";
import classes from "./Page.module.css";

const Checkout = () => {
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
    </section>
  );
};

export default Checkout;
