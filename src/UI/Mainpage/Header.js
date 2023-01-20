import logo from "../../assets/logo.png";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import { AiOutlineSearch } from "react-icons/ai";

import classes from "./Header.module.css";

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
            <MdCall />
            <a href={+2348073946451}>+2348073946451</a>
          </div>
          <div className={classes.mail}>
            <AiOutlineMail />
            <a href={+2348073946451}>Mustaphafarouk41@gmail.com</a>
          </div>
        </div>
        <ul className={classes.details}>
          <li>
            <p>Theme FAQ's</p>
            <p>Need Help?</p>
            <div>
              <p>EN</p> <RiArrowDropDownFill />
            </div>
            <div>
              <p>USD </p>
              <RiArrowDropDownFill />
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
          <IoPerson />
          <AiOutlineShoppingCart />
        </div>
      </div>
      <div className={classes.menu}>
        <input type="search" name="" id="" />
        <nav className={classes.navBar}>
          <div className={classes.eachNav}>
            Home
            <RiArrowDropDownFill />
          </div>
          <div className={classes.eachNav}>
            Mega Menu
            <RiArrowDropDownFill />
          </div>
          <div className={classes.eachNav}>
            Full Screen Menu
            <RiArrowDropDownFill />
          </div>
          <div className={classes.eachNav}>
            Pages
            <RiArrowDropDownFill />
          </div>
          <div className={classes.eachNav}>
            .User Account
            <RiArrowDropDownFill />
          </div>
          <div className={classes.eachNav}>
            Vendor Account
            <RiArrowDropDownFill />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
