import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.brand}>
        <h1 className={classes.logo}>Frk</h1>
        <article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          expedita quod error facere reprehenderit delectus a sint, nisi, fugiat
          ut mollitia optio ipsum recusandae in porro suscipit quasi vero nemo.
        </article>
        <div className={classes.stores}>
          <button>
            <img src="" alt="" />
            <span>
              <p>Get it on </p>
              <h2>Google play</h2>
            </span>
          </button>
          <button>
            <img src="" alt="" />
            <span>
              <p>Download on the </p>
              <h2>App store</h2>
            </span>
          </button>
        </div>
      </div>
      <div>
        <h2>About Us</h2>

        <ul>
          <li>Career</li>
          <li>Our Stores</li>
          <li>Our Cares</li>

          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <h2>Customer Care</h2>
        <ul>
          <li>Help Center</li>
          <li>How To Buy</li>
          <li>Track Your Order</li>

          <li>Corporate & Bulk Purchasing</li>
          <li>Returns and Refunds</li>
        </ul>
      </div>
      <div>
        <h2>Contact Us</h2>
        <ul>
          <li>Obafemi Awolowo University, Osun State, Nigeria</li>
          <li>Email: Mustaphafarouk41@gmail.com</li>
          <li>Phone:+2348073946451</li>
        </ul>
        <div className={classes.socialLogo}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
