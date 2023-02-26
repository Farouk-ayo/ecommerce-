import { Rating } from "@mui/material";
import { useState } from "react";
import classes from "./Page.module.css";

const EachItem = () => {
  const [value, setValue] = useState(4);

  return (
    <section>
      <img src="" alt="" />
      <div>
        <h1></h1>
        <span>
          <p>Rated:</p>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p>{}</p>
        </span>
        <div>
          <h3></h3>
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
