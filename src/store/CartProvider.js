import CartCtx from "./Cartctx";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if ((action.type = "ADD")) {
    state.items.push(action.item);
    // let quanty = action.item.quantity;

    console.log(state.items.findIdex((index)=>), action.item.id);
  }

  if ((action.type = "REMOVE")) {
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchState] = useReducer(cartReducer, defaultState);

  const addCartItems = (item) => {
    dispatchState({ type: "ADD", item: item });
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
