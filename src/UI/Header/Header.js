import { RiArrowDropDownFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import classes from "./Header.module.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
import CartCtx from "../../store/Cartctx";

// import { Store } from "../Body/Gender/Store";

const Header = (props) => {
  window.addEventListener("scroll", function () {
    const head = document.querySelector(".header");
    head.classList.toggle("fixed", window.scrollY > 100);
  });

  const Cartctx = useContext(CartCtx);
  const number = Cartctx.items.length;

  const suggestionArray = [
    "Clothes",
    "Furniture",
    "Electronics",
    "Shoes",
    "Bags",
    "Jewelry",
    "Toys",
  ];

  const [searchValue, setSearchValue] = useState();
  const [suggest, setSuggest] = useState(false);
  const [cartVisibility, setCartVisibility] = useState(false);

  const changeSuggestion = (e) => {
    setSuggest(true);
    setSearchValue(e.target.value);
  };

  const [categories, setCategories] = useState(false);
  const changeCategory = () => {
    setCategories(!categories);
  };

  const [dropdown, setDropdown] = useState(false);
  const changeDropdown = () => {
    setDropdown(!dropdown);
  };
  const scrollFunction = (e) => {
    const id = e.target.getAttribute("id");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  const cartBar = () => {
    setCartVisibility(!cartVisibility);
  };

  return (
    <section className={classes.headerSection} value={props.scrollValue}>
      <div className={classes.contactDetails}>
        <div className={classes.contact}>
          <div className={classes.call}>
            <MdCall />
            <Link to="+2348073946451">+2348073946451</Link>
          </div>
          <div className={classes.mail}>
            <AiOutlineMail />
            <a href={+2348073946451}>Mustaphafarouk41@gmail.com</a>
          </div>
        </div>
        <ul className={classes.details}>
          <li>
            <Link to="www.facebook">
              <GrFacebook />
            </Link>
            <Link to="https://twitter.com/Faroukayo24">
              <BsTwitter />
            </Link>
            <Link to="https://www.linkedin.com/in/mustapha-farouk-441a20214/">
              {" "}
              <BsLinkedin />
            </Link>

            <div>
              <p>EN</p> <RiArrowDropDownFill />
            </div>
          </li>
        </ul>
      </div>

      <div className="header">
        <Link to="/" className={classes.logo}>
          FrK
        </Link>
        <div className={classes.searchMenu}>
          <input
            type="text"
            value={searchValue}
            onInput={changeSuggestion}
            placeholder=" I'm shopping for "
            name=""
          />
          <button>
            <AiOutlineSearch color="" />
          </button>
          {suggest && searchValue !== "" ? (
            <ul className={classes.suggestion}>
              <li>lo gadget electronics</li>
              <li>free mifi 24</li>
              {suggestionArray.map((each) => {
                return <li>{each}</li>;
              })}
            </ul>
          ) : null}
        </div>

        <div className={classes.loginDetails}>
          <Link to="/account">
            <IoPerson
              size="3rem"
              color="black"
              className={classes.TiShoppingCart}
            />
          </Link>

          <div className={classes.cartDiv}>
            <TiShoppingCart
              size="3rem"
              color="black"
              className={classes.TiShoppingCart}
              onClick={cartBar}
            />
            {number > 0 ? <span>{number}</span> : null}
          </div>

          {cartVisibility ? <Cart /> : null}
        </div>
      </div>
      <div className={classes.menu}>
        <div className={classes.categories}>
          <button onClick={changeCategory}>
            Categories{" "}
            <RiArrowDropDownFill
              className={categories ? classes.rotate : classes.normal}
            />
          </button>
          {categories ? (
            <ul className={classes.categoriesSug}>
              {suggestionArray.map((each) => {
                return (
                  <li>
                    <Link to={`/search/${each}`}> {each}</Link>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <nav className={classes.navBar}>
          <Link
            to="/#men"
            id="#men"
            onClick={scrollFunction}
            className={classes.eachNav}
          >
            Men
          </Link>

          <Link
            to="/#women"
            id="#women"
            onClick={scrollFunction}
            className={classes.eachNav}
          >
            Women
          </Link>

          <Link
            to="/#kids"
            id="#kids"
            onClick={scrollFunction}
            className={classes.eachNav}
          >
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
