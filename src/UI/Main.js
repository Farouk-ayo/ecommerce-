import mainImage from "../assets/w11.png";
import bus from "../assets/bus.png";
import money from "../assets/money.png";
import time from "../assets/time.png";
import payment from "../assets/payment.png";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <body className={classes.body}>
      <main className={classes.main}>
        <section className={classes.collection}>
          <div className={classes.mainText}>
            <h3>lifestyle collection</h3>
            <h1>men</h1>
            <h2>
              sale up to <span className={classes.reddie}>30% off</span>{" "}
            </h2>
            <p>Get Free Shipping on orders over $99.00</p>
            <button className={classes.shopNow}>Shop Now</button>
          </div>
          <img className={classes.mainImage} src={mainImage} alt="" />
        </section>
        <section className={classes.arrivals}>
          <div className={classes.arrivalText}>
            <h3>new arrivals</h3>
            <h1>
              summer <br /> sale 20% off
            </h1>
            <link rel="stylesheet" href="" />
            shop now
            <link />
          </div>
          <img src="" alt="" />
        </section>
        <section className={classes.gaming}>
          <div className={classes.gamingText}>
            <h3>gamming 4K</h3>
            <h1>
              Desktops &<br /> Laptops
            </h1>
            <link rel="stylesheet" href="" />
            shop now
            <link />
          </div>
          <img src="" alt="" />
        </section>
        <div className={classes.checkbox}>
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
        </div>
      </main>
      <main className={classes.mainBottom}>
        <div className={classes.eachBottom}>
          <img src={bus} alt="" />
          <div className={classes.bottomText}>
            <h4>Fast Delivery</h4>
            <p>Start from $10</p>
          </div>
        </div>
        <div className={classes.eachBottom}>
          <img src={money} alt="" />
          <div className={classes.bottomText}>
            <h4>Money Guarantee</h4>
            <p>7 days back</p>
          </div>
        </div>
        <div className={classes.eachBottom}>
          <img src={time} alt="" />
          <div className={classes.bottomText}>
            <h4>365 days</h4>
            <p>For free return</p>
          </div>
        </div>
        <div className={classes.eachBottom}>
          <img src={payment} alt="" />
          <div className={classes.bottomText}>
            <h4>Payment</h4>
            <p>Secure system</p>
          </div>
        </div>
      </main>
    </body>
  );
};

export default Main;
