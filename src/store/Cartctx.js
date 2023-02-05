import React from "react";

const CartCtx = React.createContext({
  items: [],
  totalAmount: [],
  addItems: () => {},
  removeItems: () => {},
  clearItems: () => {},
});

export default CartCtx;
