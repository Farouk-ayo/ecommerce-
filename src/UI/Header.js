import logo from "../assets/logo.png";
import arrowDown from "../assets/arrowDown.png";
import person from "../assets/person.png";
import cart from "../assets/cart.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.headerSection}>
      <div className={classes.header}>
        <img src={logo} alt="" />
        <input type="search" name="" id="" />
        <div>
          <img src={person} alt="" />
          <img src={cart} alt="" />
        </div>
      </div>
      <div className={classes.menu}>
        <input type="search" name="" id="" />
        <nav className={classes.navBar}>
          <div className={classes.eachNav}>
            Home
            <img src={arrowDown} alt="" />
          </div>
          <div className={classes.eachNav}>
            Mega Menu
            <img src={arrowDown} alt="" />
          </div>
          <div className={classes.eachNav}>
            Full Screen Menu
            <img src={arrowDown} alt="" />
          </div>
          <div className={classes.eachNav}>
            Pages
            <img src={arrowDown} alt="" />
          </div>
          <div className={classes.eachNav}>
            .User Account
            <img src={arrowDown} alt="" />
          </div>
          <div className={classes.eachNav}>
            Vendor Account
            <img src={arrowDown} alt="" />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
