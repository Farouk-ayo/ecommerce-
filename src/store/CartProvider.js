import { useReducer } from "react";
import CartCtx from "./Cartctx";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if ((action.type = "ADD")) {
    const totalAmount = state.totalAmount + action.price;
  }
};

const CartProvider = () => {
  const [cartState, dispatchState] = useReducer(cartReducer, defaultState);

  const addCartItems = (price) => {
    dispatchState({ type: "ADD", price: price });
  };

  const removeCartItems = (id) => {
    dispatchState({ type: "REMOVE", id: id });
  };

  const clearCartItems = () => {
    dispatchState({ type: "CLEAR" });
  };

  const cartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addCartItems,
    removeItems: removeCartItems,
    clearItems: clearCartItems,
  };

  return <CartCtx.Provider value={cartCtx}></CartCtx.Provider>;
};

export default CartProvider;
