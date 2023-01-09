import mainImage from "../assets/w11.png";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <section>
        <div>
          <h3>lifestyle collection</h3>
          <h1>men</h1>
          <h2>sale up to 30% off</h2>
          <p>Get Free Shipping on orders over $99.00</p>
          <button>Shop Now</button>
        </div>
        <img src={mainImage} alt="" />

        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
      </section>
      <section>
        <div>
          <span>
            <h3>new arrivals</h3>
            <h1>
              summer <br /> sale 20% off
            </h1>
          </span>
          <link rel="stylesheet" href="" />
        </div>
        <img src="" alt="" />
      </section>
      <section>
        <div>
          <span>
            <h3>gamming 4K</h3>
            <h1>
              Desktops &<br /> Laptops
            </h1>
          </span>
          <link rel="stylesheet" href="" />
        </div>
        <img src="" alt="" />
      </section>
    </main>
  );
};

export default Main;
