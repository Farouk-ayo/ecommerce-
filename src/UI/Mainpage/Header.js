import logo from "../../assets/logo.png";
import arrowDown from "../../assets/arrowDown.png";
import smallArrowDown from "../../assets/smallArrowDown.png";
import person from "../../assets/person.png";
import cart from "../../assets/cart.png";
import call from "../../assets/call.png";
import mail from "../../assets/mail.png";
import classes from "./Header.module.css";

// import { BiSearch } from "react-icons/BiSearch";
import { AiOutlineSearch } from "react-icons/ai";

import { useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState();
  // const [suggestion, setSuggestion] = useState();

  const changeSuggestion = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className={classes.headerSection}>
      <div className={classes.contactDetails}>
        <div className={classes.contact}>
          <div className={classes.call}>
            <img src={call} alt="" />
            <a href={+2348073946451}>+2348073946451</a>
          </div>
          <div className={classes.mail}>
            <img src={mail} alt="" />
            <a href={+2348073946451}>Mustaphafarouk41@gmail.com</a>
          </div>
        </div>
        <ul className={classes.details}>
          <li>
            <p>Theme FAQ's</p>
            <p>Need Help?</p>
            <div>
              <p>EN</p>{" "}
              <img className={classes.rotateDown} src={smallArrowDown} alt="" />
            </div>
            <div>
              <p>USD </p>
              <img className={classes.rotateDown} src={smallArrowDown} alt="" />
            </div>
          </li>
        </ul>
      </div>

      <div className={classes.header}>
        <img src={logo} alt="" />
        <div className={classes.searchMenu}>
          <input
            type="text"
            value={searchValue}
            onChange={changeSuggestion}
            placeholder=" I'm shopping for "
            name=""
            id=""
          />
          <button>
            search
            <AiOutlineSearch />
          </button>
          <ul className={classes.suggestion}>
            <li>garri</li>
            <li>garri</li>
            <li>garri</li>
            <li>garri</li>
            <li>garri</li>
          </ul>
        </div>

        <div className={classes.loginDetails}>
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
