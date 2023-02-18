import CartCtx from "./Cartctx";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // ADD CART
  if ((action.type = "ADD")) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(existingItemIndex);
    let totalAmnt =
      state.totalAmount + +action.item.price * +action.item.quantity;
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    let quant = 1;

    if (existingItem) {
      quant++;
      totalAmnt = state.totalAmount + +action.item.price * quant;
      updatedItems = {
        ...existingItem,
      };
      console.log(quant);
    } else {
      state.items.push(action.item);
      updatedItems = state.items;
    }

    return { items: updatedItems, totalAmount: totalAmnt };
  }

  // REMOVE CART
  if ((action.type = "REMOVE")) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    let quant;

    if (existingItem) {
    } else {
      updatedItems = state.items.splice(existingItemIndex, 1);
    }
    return {
      items: updatedItems,
      totalAmount:0    };
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
