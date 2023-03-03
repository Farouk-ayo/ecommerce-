import { Checkbox, FormControlLabel } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShippingAddress1, ShippingAddress2 } from "../components/Form";
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
          to="/checkout"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          2. Details
        </NavLink>
        <hr />
        <NavLink
          to="/payment"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          3. Payment
        </NavLink>
        <hr />
        <NavLink
          to="/review"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          4. Review
        </NavLink>
      </div>

      <section className={classes.cart}>
        <div className={classes.carts}>
          <section className={classes.shippingInfo}>
            <p>Shipping Address</p>
            <section className={classes.shippingAddress}>
              <ShippingAddress1 />
              <ShippingAddress2 />
            </section>
          </section>
          <section className={classes.shippingInfo}>
            <p>Billing Address</p>
            <FormControlLabel
              control={<Checkbox style={{ color: "#2B3445" }} />}
              style={{ color: "grey" }}
              label="Same as shipping address"
            />
            <section className={classes.shippingAddress}>
              <ShippingAddress1 />
              <ShippingAddress2 />
            </section>
          </section>
        </div>
        <section className={classes.totalAmount}></section>
      </section>
    </section>
  );
};

export default Checkout;
