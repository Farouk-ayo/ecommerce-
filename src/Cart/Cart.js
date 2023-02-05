import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import CartCtx from "../store/Cartctx";
import CartInfo from "./CartInfo";

const Cart = () => {
  const cartCtx = useContext(CartCtx);

  return (
    <section>
      <header>
        <div>
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
        <button>
          Checkout <span>total amount of all</span>
        </button>
        <button>View Cart</button>
      </footer>
    </section>
  );
};

export default Cart;
