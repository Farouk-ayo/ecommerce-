import classes from "./Flashsale.module.css";
import CartCtx from "../../../store/Cartctx";
import { useContext, useState } from "react";
import { Button, Rating } from "@mui/material";

const Flash = (props) => {
  const [value, setValue] = useState(4);

  const cartCtx = useContext(CartCtx);
  const addToCart = () => {
    cartCtx.addItems({
      id: props.id,
      productName: props.productName,
      productImage: props.productImage,
      percentOff: props.percentOff,
      price: props.price,
      quantity: 1,
      totalPrice: props.price * 1,
    });
  };

  return (
    <div className={classes.flashcontainer}>
      <div>
        <h5>{props.percentOff}</h5>
      </div>

      <div className={classes.image}>
        <img className={classes.productImage} src={props.productImage} alt="" />
      </div>
      <div className={classes.details}>
        <div className={classes.productDetail}>
          <h6>{props.product}</h6>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          <p className="price"> ${props.price}.00</p>
        </div>
        <Button
          variant="outlined"
          size="small"
          onClick={addToCart}
          color="error"
          style={{ fontSize: ".7rem" }}
        >
          Add To Cart +
        </Button>
      </div>
    </div>
  );
};

export default Flash;
