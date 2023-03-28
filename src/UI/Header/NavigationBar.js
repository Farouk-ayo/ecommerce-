import { IoPerson } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
import { Badge } from "@mui/material";
import Search from "../../components/Search";
import { AllProducts } from "../Body/Gender/Store";
import Backdrop from "../../components/Backdrop";
import Modal from "../../components/Modal";
import React, { useContext, useState } from "react";
import CartCtx from "../../store/Cartctx";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  const Cartctx = useContext(CartCtx);
  const number = Cartctx.items.length;

  const [cartVisibility, setCartVisibility] = useState(false);
  const [modalShow, setModal] = useState(false);

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
    <div className="header">
      <Link to="/" className="logo">
        HuntStore
      </Link>
      <Search data={AllProducts} />
      <div className={classes.loginDetails}>
        <IoPerson className={classes.TiShoppingCart} onClick={showModal} />
        {modalShow ? (
          <>
            {ReactDOM.createPortal(<Modal onClose={closeModal} />, modal)}
            {ReactDOM.createPortal(<Backdrop onClose={closeModal} />, backDrop)}
          </>
        ) : null}

        <div className={classes.cartDiv}>
          <Badge color="error" badgeContent={number} max={9}>
            <TiShoppingCart
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
  );
};
export default NavigationBar;
