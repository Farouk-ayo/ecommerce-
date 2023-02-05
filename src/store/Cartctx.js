import React from "react";

const CartCtx = React.createContext({
  items: [],
  totalAmount: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
});

export default CartCtx;
