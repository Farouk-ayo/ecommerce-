import CartCtx from "./Cartctx";
import { useReducer, useState } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // const [cart, cartNumber]-useState(1)

  // ADD CART
  if (action.type === "ADD") {
    const totalAmnt = +state.totalAmount + +action.item.price;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const newPrice = action.item.price * (action.item.quantity + 1);
      const updatedItem = {
        ...existingItem,
        quantity: action.item.quantity + 1,
        totalPrice: newPrice,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      state.items.push(action.item);
      updatedItems = state.items;
    }

    return {
      items: updatedItems,
      totalAmount: totalAmnt,
    };
  }

  // REMOVE CART
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItemIndex === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
    }

    return {
      items: updatedItems,
      totalAmount: 0,
    };
  }

  //CLEAR CART
  if (action.type === "CLEAR") {
    return defaultState;
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
