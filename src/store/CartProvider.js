import CartCtx from "./Cartctx";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if ((action.type = "ADD")) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let quanty = action.item.quantity;
    let totalAmnt = state.totalAmount + +action.item.price * quanty;
    const existingItem = state.items[existingItemIndex];
    console.log(state.totalAmount, +action.item.price, quanty);
    let updatedItems;

    if (existingItem) {
      quanty++;
      totalAmnt = state.totalAmount + +action.item.price * quanty;
      updatedItems = { ...existingItem };
    } else {
      state.items.push(action.item);

      updatedItems = state.items;
    }

    console.log(
      { items: updatedItems, totalAmount: totalAmnt },
      existingItemIndex
    );
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
