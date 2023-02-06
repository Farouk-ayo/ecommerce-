import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import CartCtx from "../store/Cartctx";
import CartInfo from "./CartInfo";
import classes from "./CartInfo.module.css";

const Cart = () => {
  const cartCtx = useContext(CartCtx);

  return (
    <section className={classes.cart}>
      <header>
        <div className={classes.cartHead}>
          <div>
            <p>{cartCtx.items.length}</p>
          </div>
          <RxCross2 />
        </div>
        <hr />
        {
          (cartCtx.items.map = () => {
            return <CartInfo />;
          })
        }
      </header>

      <footer>
        <Link to="/cart">
          <button>
            Checkout <span>total amount of all</span>
          </button>
        </Link>
        <button>View Cart</button>
      </footer>
    </section>
  );
};

export default Cart;
