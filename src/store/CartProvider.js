import { useReducer } from "react";
import CartCtx from "./Cartctx";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if ((action.type = "ADD")) {
    // const totalAmount = state.price;
    console.log(action.item);
  }

  if ((action.type = "REMOVE")) {
    // console.log(action.id);
    // const removedItemId = state.items;
    // console.log(removedItemId);
  }
};

const CartProvider = (props) => {
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

  return <CartCtx.Provider value={cartCtx}>{props.children}</CartCtx.Provider>;
};

export default CartProvider;
