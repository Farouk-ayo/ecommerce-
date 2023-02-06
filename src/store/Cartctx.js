import React from "react";

const CartCtx = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: () => {},
  removeItems: () => {},
  clearItems: () => {},
});

export default CartCtx;
