import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// import Cart from "../../Cart/Cart";
import { CartDrawer } from "../../components/Sidebar";
import { Badge } from "@mui/material";
import Search from "../../components/Search";
import { AllProducts } from "../Body/Gender/Store";
import Backdrop from "../../components/Backdrop";
import Modal from "../../components/Modal";
import React, { useContext, useState } from "react";
import CartCtx from "../../store/Cartctx";
import classes from "./NavigationBar.module.css";
import { SwipeableTemporaryDrawer } from "../../components/Sidebar";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const NavigationBar = () => {
  const Cartctx = useContext(CartCtx);
  const number = Cartctx.items.length;

  // const [cartVisibility, setCartVisibility] = useState(false);
  const [modalShow, setModal] = useState(false);

  const backDrop = document.getElementById("back--drop");
  // const cartInfo = document.getElementById("cart--info");
  const modal = document.getElementById("modal--form");

  // const cartBar = () => {
  //   setCartVisibility(true);
  // };
  // const closeCartBar = () => {
  //   setCartVisibility(false);
  // };
  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="header">
      <SwipeableTemporaryDrawer />
      <Link to="/" className="logo">
        HuntStore
      </Link>
      <Search data={AllProducts} className="searchMenu" />
      <div className={classes.loginDetails}>
        <div className={classes.search}>
          <BiSearch size={20} />
        </div>
        <BsFillPersonFill className="shoppingCart" onClick={showModal} />

        {modalShow ? (
          <>
            {ReactDOM.createPortal(<Modal onClose={closeModal} />, modal)}
            {ReactDOM.createPortal(<Backdrop onClose={closeModal} />, backDrop)}
          </>
        ) : null}

        <div className={classes.cartDiv}>
          <Badge color="error" badgeContent={number} max={9}>
            {/* <BsFillPersonFill
              className={classes.shoppingCart}
              onClick={cartBar}
            /> */}
            <CartDrawer />
          </Badge>
        </div>
        {/* {cartVisibility ? (
          <>
            {ReactDOM.createPortal(
              <Backdrop onClose={closeCartBar} />,
              backDrop
            )}
            {ReactDOM.createPortal(<Cart onClose={closeCartBar} />, cartInfo)}
          </>
        ) : null} */}
      </div>
    </div>
  );
};
export default NavigationBar;
