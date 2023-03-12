import CartLinks from "../../components/CartLinks";
import classes from "../Page.module.css";
import CartCtx from "../../store/Cartctx";
import { useContext, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { CreditCardDetails1, PaypalEmail } from "../../components/Form";

const Payment = () => {
  const cartCtx = useContext(CartCtx);

  const [value, setValue] = useState("firstID");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <section className={classes.CartPage}>
      <CartLinks />
      <section className={classes.cart}>
        <div className={classes.carts}>
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              sx={{
                color: "#2B3445",
                width: "100%",
              }}
            >
              <FormControlLabel
                value="firstID"
                control={<Radio color="error" />}
                label="Pay with credit card"
                sx={{
                  padding: "1.5rem 1rem",
                  background: "white",
                  borderBottom: ".1rem solid #2b344533",
                  borderTopRightRadius: "1rem",
                  borderTopLeftRadius: "1rem",
                  boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
                }}
              />{" "}
              {value === "firstID" ? (
                <div>
                  <CreditCardDetails1 />
                </div>
              ) : null}
              <FormControlLabel
                value="secondID"
                control={<Radio color="error" />}
                label="Pay with Paypal"
                sx={{
                  padding: "1.5rem 1rem",
                  background: "white",
                  borderBottom: ".1rem solid #2b344533",
                  boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
                }}
              />{" "}
              {value === "secondID" ? <PaypalEmail /> : null}
              <FormControlLabel
                value="thirdID"
                control={<Radio color="error" />}
                label="Cash On Delivery"
                sx={{
                  padding: "1.5rem 1rem",
                  background: "white",
                  borderBottom: ".1rem solid #2b344533",
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                  boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
                }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <section className={classes.totalAmount}>
          <section className={classes.fees}>
            <h4>
              <span>Subtotal:</span> <span>${cartCtx.totalAmount}</span>
            </h4>
            <h4>
              <span>Shipping:</span> <span></span>
            </h4>
            <h4>
              <span>Tax:</span> <span>$40.00</span>
            </h4>
            <h4>
              <span>Discount:</span> <span></span>
            </h4>
          </section>
          <hr />
          <h1>${cartCtx.totalAmount + 40}.00</h1>
        </section>
      </section>
    </section>
  );
};

export default Payment;
