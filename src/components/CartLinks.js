import { NavLink } from "react-router-dom";
import classes from "../page/Page.module.css";

const CartLinks = () => {
  return (
    <div className={classes.links}>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? classes.active : classes.notActive
        }
        end
      >
        1. Cart
      </NavLink>
      <hr />
      <NavLink
        to="/cart/checkout"
        className={({ isActive }) =>
          isActive ? classes.active : classes.notActive
        }
      >
        2. Details
      </NavLink>
      <hr />
      <NavLink
        to="/cart/payment"
        className={({ isActive }) =>
          isActive ? classes.active : classes.notActive
        }
      >
        3. Payment
      </NavLink>
      <hr />
      <NavLink
        to="/cart/review"
        className={({ isActive }) =>
          isActive ? classes.active : classes.notActive
        }
      >
        4. Review
      </NavLink>
    </div>
  );
};

export default CartLinks;
