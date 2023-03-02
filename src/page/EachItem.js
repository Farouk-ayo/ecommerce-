import { Rating } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import classes from "./Page.module.css";
import { AllProducts } from "../UI/Body/Gender/Store";

const EachItem = () => {
  const [value, setValue] = useState(4);
  const params = useParams();
  const EachId = params.product;

  const product = AllProducts.find((id) => id[0] === EachId);
  console.log(product);

  return (
    <section>
      <img src={product[1]} alt="" />
      <div>
        <h1>{product[2]}</h1>
        <span>
          <p>Rated:</p>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p>{product[4]}</p>
        </span>
        <div>
          <h3>{product[3]}</h3>
          <p>Stock Available</p>
        </div>

        <button>Add To Cart</button>
        <p>
          Sold By: <span>Mobile Store</span>
        </p>
      </div>
    </section>
  );
};

export default EachItem;
