import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import classes from "./CartInfo.module.css";

const CartInfo = () => {
  return (
    <section className={classes.cartInfo}>
      <div>
        <div>
          <AiOutlinePlusCircle />
          <p>"num"</p>
          <AiOutlineMinusCircle />
        </div>
        <img src="" alt="" />
        <div>
          <h5>Budi car</h5>
          <p>
            <span>$290</span>
            <span>"num"</span>
          </p>
          <h2>"total amount"</h2>
        </div>
        <RxCross2 />
      </div>
      <hr />
    </section>
  );
};

export default CartInfo;
