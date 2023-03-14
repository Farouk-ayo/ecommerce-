import { RiArrowDropDownFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import {
  MdCable,
  MdCall,
  MdCheckroom,
  MdToys,
  MdWeekend,
} from "react-icons/md";
import { GiGoldNuggets, GiRunningShoe } from "react-icons/gi";

import { AiOutlineMail } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { BsHandbagFill, BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import ReactDOM from "react-dom";
import classes from "./Header.module.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
import CartCtx from "../../store/Cartctx";
import { Badge } from "@mui/material";
import Search from "../../components/Search";
import { AllProducts } from "../Body/Gender/Store";
import Backdrop from "../../components/Backdrop";
import Modal from "../../components/Modal";

const Header = (props) => {
  window.addEventListener("scroll", function () {
    const head = document.querySelector(".header");
    head.classList.toggle("fixed", window.scrollY > 100);
  });

  const Cartctx = useContext(CartCtx);
  const number = Cartctx.items.length;

  const suggestionArray = [
    { id: 1, type: "Clothes", img: <MdCheckroom size={40} /> },
    { id: 2, type: "Furniture", img: <MdWeekend size={40} /> },
    { id: 3, type: "Electronics", img: <MdCable size={40} /> },
    { id: 4, type: "Shoes", img: <GiRunningShoe size={40} /> },
    { id: 5, type: "Bags", img: <BsHandbagFill size={40} /> },
    { id: 6, type: "Jewelry", img: <GiGoldNuggets size={40} /> },
    { id: 7, type: "Toys", img: <MdToys size={40} /> },
  ];

  const [cartVisibility, setCartVisibility] = useState(false);
  const [modalShow, setModal] = useState(false);

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

  const backDrop = document.getElementById("back--drop");
  const cartInfo = document.getElementById("cart--info");
  const modal = document.getElementById("modal--form");

  const cartBar = () => {
    setCartVisibility(true);
  };
  const closeCartBar = () => {
    setCartVisibility(false);
  };
  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
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
              <BsLinkedin />
            </Link>

            <div>
              <p>EN</p> <RiArrowDropDownFill />
            </div>
          </li>
        </ul>
      </div>

      <div className="header">
        <Link to="/" className="logo">
          HuntStore
        </Link>
        <Search data={AllProducts} />
        <div className={classes.loginDetails}>
          <IoPerson
            size="3rem"
            color="black"
            className={classes.TiShoppingCart}
            onClick={showModal}
          />
          {modalShow ? (
            <>
              {ReactDOM.createPortal(<Modal />, modal)}
              {ReactDOM.createPortal(
                <Backdrop onClose={closeModal} />,
                backDrop
              )}
            </>
          ) : null}

          <div className={classes.cartDiv}>
            <Badge color="error" badgeContent={number} max={9}>
              <TiShoppingCart
                size="3rem"
                color="black"
                className={classes.TiShoppingCart}
                onClick={cartBar}
              />
            </Badge>
          </div>
          {cartVisibility ? (
            <>
              {ReactDOM.createPortal(
                <Backdrop onClose={closeCartBar} />,
                backDrop
              )}
              {ReactDOM.createPortal(<Cart onClose={closeCartBar} />, cartInfo)}
            </>
          ) : null}
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
                    <Link to={`/search/${each.type}`}> {each.type}</Link>
                    {each.img}
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

          <div onClick={changeDropdown}>
            <Link to="" className={classes.eachNav}>
              User Account
            </Link>
            <RiArrowDropDownFill cursor="pointer" size={25} />
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
