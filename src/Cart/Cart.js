import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import CartCtx from "../store/Cartctx";
import CartInfo from "./CartInfo";
import { TiShoppingCart } from "react-icons/ti";
import classes from "./CartInfo.module.css";

const Cart = () => {
  const cartCtx = useContext(CartCtx);

  return (
    <section className={classes.cart}>
      <header>
        <div className={classes.cartHead}>
          <div>
            <TiShoppingCart size={30} />
            <p>{cartCtx.items.length}item</p>
          </div>
          <RxCross2 size={30} className={classes.TiShoppingCart} />
        </div>
        <hr />
        {
          (cartCtx.items.map = () => {
            return <CartInfo />;
          })
        }
      </header>

      <footer>
        <button>
          Checkout <span>total amount of all</span>
        </button>

        <Link to="/cart">
          <button>View Cart</button>
        </Link>
      </footer>
    </section>
  );
};

export default Cart;
