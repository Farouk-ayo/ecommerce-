import { RiArrowDropDownFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import classes from "./Header.module.css";

import { useState } from "react";

import { Link } from "react-router-dom";

// import { Store } from "../Body/Gender/Store";

const Header = () => {
  const [searchValue, setSearchValue] = useState();
  // const [suggestion, setSuggestion] = useState();

  const changeSuggestion = (e) => {
    setSearchValue(e.target.value);
  };

  const [dropdown, setDropdown] = useState(false);

  const changeDropdown = () => {
    setDropdown(!dropdown);
    console.log(dropdown);
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
        <Link to="/" className={classes.logo}>
          FrK
        </Link>
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
            <AiOutlineSearch color="" />
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
          <IoPerson size="2rem" color="" />

          <Link to="/cart">
            <AiOutlineShoppingCart size="2rem" color="#212a2f" />
          </Link>
        </div>
      </div>
      <div className={classes.menu}>
        <div className={classes.categories}>
          {/* <button>
            Categories <RiArrowDropDownFill />
          </button> */}
        </div>
        <nav className={classes.navBar}>
          <Link to="/#men">Men</Link>

          <Link to="/#women" className={classes.eachNav}>
            Women
          </Link>

          <Link to="/#kids" className={classes.eachNav}>
            Kids
          </Link>

          <div>
            <Link to="/authentication" className={classes.eachNav}>
              User Account{" "}
            </Link>
            <RiArrowDropDownFill
              onClick={changeDropdown}
              cursor="pointer"
              size={25}
            />
          </div>

          {dropdown ? (
            <div className={classes.dropdown}>
              {/* <Link></Link> */}
              accounts
            </div>
          ) : null}
        </nav>
      </div>
    </section>
  );
};

export default Header;
