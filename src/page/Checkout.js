import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ShippingAddress1,
  ShippingAddress2,
  TotalAmount,
} from "../components/Form";
import classes from "./Page.module.css";
import CartCtx from "../store/Cartctx";

const Checkout = () => {
  const cartCtx = useContext(CartCtx);

  const [Billing, showBilling] = useState(false);
  const checkboxHandler = () => {
    showBilling(!Billing);
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
              control={
                <Checkbox
                  checked={Billing}
                  onChange={checkboxHandler}
                  style={{ color: "#2B3445" }}
                />
              }
              style={{ color: "grey" }}
              label="Same as shipping address"
            />
            {!Billing ? (
              <section className={classes.shippingAddress}>
                <ShippingAddress1 />
                <ShippingAddress2 />
              </section>
            ) : null}
          </section>
          <section className={classes.btnGroup}>
            <Button
              color="error"
              disableElevation
              variant="outlined"
              fullWidth
              sx={{ textTransform: "none" }}
            >
              Back To Cart
            </Button>
            <Button
              color="error"
              variant="contained"
              disableElevation
              fullWidth
              sx={{ textTransform: "none" }}
            >
              Proceed To Payment
            </Button>
          </section>
        </div>
        <section className={classes.totalAmount}>
          <section className={classes.fees}>
            <h4>
              <span>Subtotal:</span> <span>${cartCtx.totalAmount}</span>
            </h4>
            <h4>
              <span>Shipping:</span> <span>$0.00</span>
            </h4>
            <h4>
              <span>Tax:</span> <span>$40.00</span>
            </h4>
            <h4>
              <span>Discount:</span> <span>$0.00</span>
            </h4>
          </section>
          <hr />
          <h1>${cartCtx.totalAmount + 40}.00</h1>
          <TotalAmount />
        </section>
      </section>
    </section>
  );
};

export default Checkout;
